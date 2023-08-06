// import chroma from "chroma-js"

// const gray = {
//   900: "#707070",
//   800: "#9D9D9D",
//   700: "#A7A7A7",
//   600: "#C3C3C3",
//   500: "#D6D6D6",
//   400: "#E6E6E6",
//   300: "#f0f0f0",
//   200: "#f5f5f5",
//   100: "#fafafa",
// }

// const primaryColor = "#009F2B"
// const primaryHover = "#009F2B"
// const primaryLight = "#edf8f0"
// const primaryGreen1 = "#81CDA1"
// const accentColor = "#0091ba"
// const accentColorAlt = "#00A4d1"
// const accentColorLight = "#E6F5F9"
// const linkColor = primaryColor
// const linkHover = "#0D79DF"
// const warningColor = "#FFC107"
// const warningHover = "#EDAD02"
// const errorColor = "#e83a3a"
// const errorColorLight = "#fef2f2"
// const baseColor = "#000"

// const sliderRailColor = "rgba(95,99,242,0.2)"
// const borderColorBase = gray[300]
// const btnBorderColor = gray[500]
// const searchIconSpace = "24px"

// const tooltipBg = "#fff"

// const gray100 = gray[100]
// const gray200 = gray[200]
// const gray300 = gray[300]
// const gray400 = gray[400]
// const gray500 = gray[500]
// const gray600 = gray[600]
// const gray700 = gray[700]
// const gray800 = gray[800]
// const gray900 = gray[900]

// const themeVariables = {
//   gray100: gray100,
//   gray200: gray200,
//   gray300: gray300,
//   gray400: gray400,
//   gray500: gray500,
//   gray600: gray600,
//   gray700: gray700,
//   gray800: gray800,
//   gray900: gray900,
//   "primary-color": primaryColor,
//   "primary-hover": primaryHover,
//   "primary-light": primaryLight,
//   "primary-green-1": primaryGreen1,
//   "accent-color": accentColor,
//   "accent-color-alt": accentColorAlt,
//   "accent-color-light": accentColorLight,
//   "link-color": linkColor,
//   "link-hover": linkHover,
//   "warning-color": warningColor,
//   "warning-hover": warningHover,
//   "error-color": errorColor,
//   "error-color-light": errorColorLight,
//   "base-color": baseColor,
//   "font-family": "Figtree, sans-serif",
//   "text-color-secondary": gray[900],
//   "disabled-color": "rgba(0, 0, 0, 0.25)",
//   "border-radius-base": "4px",
//   "border-color-base": borderColorBase,
//   "border-color-light": gray[500],
//   "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)",
//   "border-color-normal": borderColorBase,
//   "btn-border-color": btnBorderColor,
//   "search-icon-space": searchIconSpace,

//   // >>> Success
//   "success-color": primaryColor,

//   // Heading
//   "heading-1-size": "24px",
//   "heading-2-size": "22px",
//   "heading-3-size": "18px",
//   "heading-4-size": "16px",
//   "heading-5-size": "14px", // not recommended in guideline

//   // Cards
//   "card-head-background": "#fff",
//   "card-background": "#fff",
//   "card-radius": "4px",

//   // Layout
//   "layout-body-background": "#f6f7fb",
//   "layout-header-background": "#fff",
//   "layout-footer-background": "#fafafa",
//   "layout-header-padding": "0 30px 0 15px",
//   "layout-footer-padding": "24px 15px",
//   "layout-sider-background": "#fff",
//   "layout-trigger-height": "48px",
//   "layout-trigger-background": "#002140",
//   "layout-trigger-color": "#fff",
//   "layout-zero-trigger-width": "36px",
//   "layout-zero-trigger-height": "42px",

//   // Form
//   "label-required-color": errorColor,
//   "label-color": gray[900],
//   "form-item-margin-bottom": "18px",
//   "form-item-label-font-size": "14px",

//   // Buttons
//   "btn-border-width": 0,
//   "btn-default-bg": gray[100],
//   "btn-height-base": "40px",
//   "btn-height-lg": "44px",
//   "btn-height-sm": "36px",
//   "btn-padding-horizontal-lg": "32px",
//   "btn-padding-horizontal-sm": "16px",
//   "btn-circle-size": "32px",
//   "btn-circle-size-lg": "40px",
//   "btn-circle-size-sm": "24px",
//   "btn-square-size": "32px",
//   "btn-square-size-lg": "40px",
//   "btn-square-size-sm": "24px",

//   // Alert
//   // ---
//   // "alert-success-border-color": "~`colorPalette('@{success-color}', 3) `",
//   // "alert-success-bg-color": "~`colorPalette('@{success-color}', 1) `",
//   // "alert-success-icon-color": "@success-color",
//   // "alert-info-border-color": "~`colorPalette('@{info-color}', 3) `",
//   // "alert-info-bg-color": "~`colorPalette('@{info-color}', 1) `",
//   // "alert-info-icon-color": "@info-color",
//   // "alert-warning-border-color": "~`colorPalette('@{warning-color}', 3) `",
//   // "alert-warning-bg-color": warningColor + 15,
//   "alert-warning-icon-color": "@warning-color",
//   // "alert-error-border-color": "~`colorPalette('@{error-color}', 3) `",
//   // "alert-error-bg-color": "~`colorPalette('@{error-color}', 1) `",
//   // "alert-error-icon-color": "@error-color",
//   "alert-message-color": "currentColor",
//   // "alert-text-color": "@text-color",
//   // "alert-close-color": "@text-color-secondary",
//   // "alert-close-hover-color": "@icon-color-hover",
//   // "alert-padding-vertical": "@padding-xs",
//   // "alert-padding-horizontal": "@padding-md - 1px",
//   // "alert-no-icon-padding-vertical": "@padding-xs",
//   // "alert-with-description-no-icon-padding-vertical": "@padding-md - 1px",
//   // "alert-with-description-padding-vertical": "@padding-md - 1px",
//   // "alert-with-description-padding": "@alert-with-description-padding-vertical 15p",
//   // // @alert-with-description-no-icon-padding-vertical @alert-with-description-icon-size;
//   // "alert-icon-top": "8px + @font-size-base * (@line-height-base / 2) - (@font-size-base / 2)",
//   // "alert-with-description-icon-size": "24px",

//   // radio btn
//   "radio-button-checked-bg": primaryColor,

//   // Checkbox
//   "checkbox-color": accentColorAlt,
//   "checkbox-border-radius": "2px",

//   // gutter width
//   "grid-gutter-width": 25,

//   // slider
//   "slider-rail-background-color": sliderRailColor,
//   "slider-rail-background-color-hover": sliderRailColor,
//   "slider-track-background-color": primaryColor,
//   "slider-track-background-color-hover": primaryColor,
//   "slider-handle-color": primaryColor,
//   "slider-handle-size": "16px",

//   // input
//   "input-height-base": "48px",
//   "input-border-color": borderColorBase,
//   "input-height-sm": "30px",
//   "input-height-lg": "50px",
//   "input-placeholder-color": gray[700],
//   "input-color": baseColor,

//   // Select
//   "select-item-selected-color": primaryColor,
//   "select-item-selected-bg": primaryLight,
//   "select-selection-item-bg": primaryLight,

//   // rate
//   "rate-star-color": warningColor,
//   // "@rate-star-bg": "@border-color-split",
//   "rate-star-size": "13px",
//   // "@rate-star-hover-scale": "scale(1.1)",

//   // Switch
//   "switch-min-width": "35px",
//   "switch-sm-min-width": "30px",
//   "switch-height": "18px",
//   "switch-sm-height": "15px",

//   // result
//   "result-title-font-size": "20px",
//   "result-subtitle-font-size": "12px",
//   "result-icon-font-size": "50px",

//   // tabs
//   "tabs-horizontal-padding": "12px 8px",
//   "tabs-horizontal-padding-lg": "12px 16px",
//   "tabs-horizontal-gutter": "16px",
//   "tabs-bar-margin": "16px 0",
//   // "tabs-title-font-size": "14px",

//   "tabs-title-font-size": "14px",
//   "tabs-title-font-size-lg": "14px",
//   "tabs-title-font-size-sm": "14px",

//   "tabs-ink-bar-color": accentColor,
//   "tabs-highlight-color": accentColor,
//   "tabs-hover-color": accentColorAlt,
//   "tabs-active-color": chroma(accentColor).darken(0.8),

//   // list
//   "list-item-padding": "10px 24px",
//   "list-item-padding-sm": "8px 0",

//   // Tags
//   "tag-border-radius": "4px",
//   "tag-default-bg": "#EFF0F3",
//   "tag-line-height": "24px",

//   // Table
//   "table-font-size": "inherit",
//   "table-header-bg": gray[200],
//   "table-header-color": gray[900],
//   "table-header-cell-split-color": gray[200],
//   "table-padding-vertical": "8px",
//   "table-padding-horizontal": "8px",
//   "table-body-selected-sort-bg": gray[100],
//   "table-selected-row-bg": "transparent",
//   "table-row-hover-bg": gray[300],

//   // Badge
//   "@badge-dot-size": "10px",
//   // "@badge-font-size": "@font-size-sm",
//   // "@badge-font-size-sm": "@font-size-sm",
//   // "@badge-font-weight": "normal",
//   // "@badge-status-size": "6px",
//   // "@badge-text-color": "@component-background",
//   // "@badge-color": "@highlight-color",

//   // Tooltip
//   // "tooltip-max-width": "250px",
//   "tooltip-color": "#000",
//   "tooltip-bg": tooltipBg,
//   // "tooltip-arrow-width": "8px * sqrt(2)",
//   // "tooltip-distance": "@tooltip-arrow-width - 1px + 4px",
//   "tooltip-arrow-color": tooltipBg,
//   // "tooltip-border-radius": "@border-radius-base",

//   // Modals
//   "modal-header-bg": gray[200],
//   "modal-header-padding-vertical": "20px",
//   "modal-header-padding-horizontal": "32px",
//   "modal-header-title-font-size": "18px",
//   "modal-body-padding": "16px 32px",
//   "modal-footer-padding-horizontal": "32px",
//   "modal-footer-padding-vertical": "20px",

//   // Segmented
//   "segmented-bg": "#fff",
//   "segmented-hover-bg": "#fff",
//   "segmented-selected-bg": primaryLight,
//   "segmented-label-color": gray[600],
//   "segmented-label-hover-color": primaryColor,

//   // Pagination
//   "pagination-item-size": "36px",
//   "pagination-font-weight-active": "600",
//   "pagination-item-bg-active": primaryLight,
//   "pagination-item-input-bg": "black",

//   // Statistic
//   "statistic-content-font-size": "1rem",

//   // Drawer
//   // ---
//   "drawer-header-padding": "30px 24px 12px",
//   // "drawer-body-padding": "@padding-lg",
//   // "drawer-bg": "@component-background",
//   // "drawer-footer-padding-vertical": "@modal-footer-padding-vertical",
//   // "drawer-footer-padding-horizontal": "@modal-footer-padding-horizontal",
//   // "drawer-header-close-size": "56px",
//   "drawer-title-font-size": "20px",
//   "drawer-title-line-height": "28px",

//   // The background colors for active and hover states for things like
//   // list items or table cells.
//   "item-active-bg": primaryLight,

//   // TimePicker
//   // "picker-bg": componentBackground,
//   // "picker-basic-cell-hover-color": primaryColor,
//   "picker-basic-cell-active-with-range-color": primaryLight,
//   // "picker-basic-cell-hover-with-range-color": "orage",
//   // "picker-basic-cell-disabled-bg": "yellow",
//   "picker-date-hover-range-border-color": primaryColor,
//   "picker-date-hover-range-color": "#fff",
//   // "picker-time-panel-column-width": "56px",
//   // "picker-time-panel-column-height": "224px",
//   // "picker-time-panel-cell-height": "28px",
//   // "picker-panel-cell-height": "24px",
//   // "picker-panel-cell-width": "36px",
//   // "picker-text-height": "40px",
//   // "picker-panel-without-time-cell-height": "66px",
// }

// export default { variables: themeVariables }
