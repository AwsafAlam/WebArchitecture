# WebArchitecture

---

### SASS
Installing SASS
- First install ruby `sudo apt install ruby-full`
- Install sass compiler using `sudo gem install sass`
- For compilation using terminal, go to the directory type `sass --watch style.sass:style.css`

This will compile sass everytime you hit save

### Scalable Modular Architecture for CSS

This book [smacss](https://smacss.com/) is helpful for designing modular css architectures for large applications.

**Project structure:**
css styles are organised in a modular layout:

- plugins
- base (Element selectors , Base elements)
- modules (More discrete components of the page, standalone e.g widgets pop ups etc)
- layouts (Major and minor styles based of use, e.g headers footers etc)
