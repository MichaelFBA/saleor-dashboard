export const BUTTON_SELECTORS = {
  back: '[data-test-id="app-header-back-button"]',
  submit: '[data-test-id="submit"]',
  confirm: '[data-test="button-bar-confirm"]',
  goBackButton: "[data-test-id='app-header-back-button']",
  checkbox: "[type='checkbox']",
  checked: "[class*='checked']",
  selectOption: "[data-test-id*='select-option']",
  notSelectedOption: ":not([aria-selected])",
  deleteButton: '[data-test="button-bar-delete"]',
  confirmDeleteButton: '[data-test-id="confirm-delete"]',
  expandIcon: '[data-test-id="expand-icon"]',
  nextPaginationButton: '[data-test="button-pagination-next"]',
  deleteIcon: '[data-test-id="delete-icon"]',
  showMoreButton: '[data-test-id="show-more-button"]',
  button: "button",
  deleteAssignedItemsConsentCheckbox: '[name="delete-assigned-items-consent"]'
};
