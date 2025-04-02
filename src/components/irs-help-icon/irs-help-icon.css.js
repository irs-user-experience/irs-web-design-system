// (c) 2025 The MITRE Corporation.
import { css, unsafeCSS } from "lit";

import style from '../../styles/styles.scss?inline';

export const helpIconStyles = [
  unsafeCSS(style),
  css`
  :host {

    position: relative;
  
    .irs-help-icon-wrapper {
      display: flex;
      flex-wrap: wrap;
  
      .break {
        // flex-basis: 100%;
        width: 100%;
        height: 0;
      }
  
      .irs-help-icon-label {
        display: flex;
      }
  
      svg.usa-icon {
        height: 20px;
        width: 20px;
      }
  
      .irs-help-icon-arrow-border {
        display: none;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid  #dfe1e2;
        position: absolute;
  
        &.open {
          display: block;
        }
      }
  
      .irs-help-icon-arrow-inner {
        display: none;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid white;
        position: absolute;
  
        &.open {
          display: block;
        }
      }
      
      .irs-help-icon-content {
        padding: 16px;
        // position: absolute;
        border: solid 1px  #dfe1e2;   
        width: 100%;
        margin-top: 8px;
        display: none;
        background-color: white;
        margin-right: 20px;
  
        &.open {
          display: block;
        }
        // left: 0;
        // right: 0;
  
        /* TODO: Punting for now but figure out how to render triangle */
        // &:before, &:after {
        //   content: '';
        //   position: absolute;
        //   width: 0;
        //   height: 0;
        //   left: 10px;
        //   top: -16px;
        //   border: 8px solid;
        //   border-color: transparent transparent  #dfe1e2;
        // }
      
        // // Offset :after to cover part of the :before arrow
        // &:after {
        //   // left: 8px;
        //   top: -14px;
        //   border-color: transparent transparent white;
        // }
      }
      
      .irs-help-icon-button {
        position: relative;
        z-index: 10;
        cursor: pointer;
        margin-left: 8px;
        vertical-align: middle;
      }
    }
  }
   
  `
];
