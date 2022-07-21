export const copy = (value: string): Promise<string> => {
  const promise = new Promise<string>((resolve): void => {
    // @ts-ignore
    let copyTextArea = null as HTMLTextAreaElement;
    try {
      copyTextArea = document.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      document.body.appendChild(copyTextArea);
      copyTextArea.value = value;
      copyTextArea.select();
      document.execCommand('copy');
      resolve(value);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
  return promise;
} 