import { App, Modal, Setting } from "obsidian";

export class NameInputModal extends Modal {
  result: string;
  onSubmit: (result: string) => void;

  constructor(app: App, onSubmit: (result: string) => void) {
    super(app);
    this.onSubmit = onSubmit;
    this.result = "";
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h4", { text: "Enter the name of the filter" });

    new Setting(contentEl).setName("Name:").addText((text) => {
      text.setPlaceholder("Filter name");
      text.setValue(this.result || "");
      text.onChange((value) => {
        this.result = value;
      });
      // Ensure focus and caret visibility
      window.setTimeout(() => {
        if (text.inputEl) {
          text.inputEl.focus();
          text.inputEl.select();
        }
      }, 0);
      // Submit on Enter key
      text.inputEl.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.close();
          this.onSubmit(this.result || "");
        }
      });
    });

    new Setting(contentEl).addButton((btn) =>
      btn
        .setButtonText("Save")
        .setCta()
        .onClick(() => {
          this.close();
          this.onSubmit(this.result);
        })
    );
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}
