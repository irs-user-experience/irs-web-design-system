# Dockerfile for Building Userlab-Frontend

######################## Stage 1
FROM node:22.13 AS build

# Install MITRE CA Certs if on the MII
RUN if curl -ksSL https://gitlab.mitre.org/mitre-scripts/mitre-pki/raw/master/os_scripts/install_certs.sh > /tmp/install_certs.sh 2>/dev/null; then sh /tmp/install_certs.sh && rm -f /tmp/install_certs.sh; else echo "Not on the MII, skipping certificate install"; fi

# Copy the package.json and package-lock.json so we can install dependencies
COPY package*.json /src/

WORKDIR /src

RUN npm ci

COPY . /src

RUN npm run build-storybook

######################## Stage 2
FROM nginx:1.27.3 AS final

# Install MITRE CA Certs if on the MII
RUN if curl -ksSL https://gitlab.mitre.org/mitre-scripts/mitre-pki/raw/master/os_scripts/install_certs.sh > /tmp/install_certs.sh 2>/dev/null; then sh /tmp/install_certs.sh && rm -f /tmp/install_certs.sh; else echo "Not on the MII, skipping certificate install"; fi

# Copy the build from the last stage
COPY --from=build /src/storybook-static /usr/share/nginx/html
# Set user-scalable=yes in the meta because we can't find a cleaner way to do this and 
# we want to allow e.g. mobile to be able to zoom in
RUN /usr/bin/sed -i 's/<meta name="viewport" .* \/>/<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" \/>/'  /usr/share/nginx/html/index.html
# Overwrite the default config so it doesn't cause problems
COPY build/default.conf.template /etc/nginx/templates/

# Port to listen on internally
ENV PORT=80
