/* ===== Start Warinig ============================== */
const elementAlert = document.querySelector('[data-alert]') as HTMLDivElement;
const elementClose = document.querySelector('[data-close]') as HTMLDivElement;

export const Modal = {
  handleWarning(
    classOneWarning: string,
    classTwoWarning: string,
    classThreeWarning: string,
  ): void {
    elementAlert.classList.add(classOneWarning);
    elementAlert.classList.add(classTwoWarning);
    elementAlert.classList.remove(classThreeWarning);
  },

  handleTime(classOneTime: string, classTwoTime: string): void {
    setTimeout(() => {
      elementAlert.classList.remove(classOneTime);
      elementAlert.classList.add(classTwoTime);
    }, 4000);
  },

  handleClose(classOneClose: string, classTwoClose: string): void {
    elementAlert.classList.remove(classOneClose);
    elementAlert.classList.add(classTwoClose);
  },

  handleRemoveAll(classOneRemoveAll: string): void {
    elementAlert.classList.remove(classOneRemoveAll);
  },
};

elementClose.addEventListener('click', () => Modal.handleClose('show', 'hide'));
/* ===== End Warinig ============================== */
