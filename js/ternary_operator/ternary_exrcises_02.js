const textEditors = ['Notepad ++', 'Neovim', 'Vim', 'Sublime Text', 'Atom', 'GNU Nano', 'Tex-Edit Plus'];
console.log(textEditors);

const textEditorsContainSpace = textEditors.filter(editor => {
    return (editor.includes(' ')) ? editor : false;
});
console.log(textEditorsContainSpace);
