
//This piece of javascript code was copied from w3schools website and modified by me
$(document).ready(function () {

  class SlickSlider {
     // Current arguments are '.function-photos-slick' + the slick args object
    constructor(selector, options) {
        this.$element = $(selector);
        this.options = options;
        this.initialise();
    }

    initialise() {
      // Just check if the element exists
        if (this.$element.length > 0) {
          // add the slick args object to the slick method call
            this.$element.slick(this.options);
        }
    }
  }
      // Store the slick args in a variable
      const slickArgs = {
        'infinite': true,
        'arrows': false,
        'dots': false,
        'autoplay': true,
        'autoplaySpeed': 3000,
        'adaptiveHeight': false
    }
    new SlickSlider('.function-photos-slick', slickArgs);
   
    class ImageModal {
      // Current arguments are 'gallery_modal', 'modal_img', 'close'
      constructor(modalId, modalImgId, closeClass) {
        // This is just the current object created from new
          this.modal = document.getElementById(modalId);
          this.modalImg = document.getElementById(modalImgId);
          this.closeBtn = document.getElementsByClassName(closeClass)[0];
  
          this.initialise();
      }
  
      // This init is the first method call
      initialise() {
        //  select all imgs
          document.querySelectorAll('.gallery .card img').forEach(img => {
            // Click listener
              img.onclick = () => {
                // Call the open modal method that just applies display block to the modal
                  this.openModal(img.src);
              }
          });
  
          // Apply display none on cross click
          this.closeBtn.onclick = () => {
              this.closeModal();
          }
  
          // Apply display none on window click (not imaage)
          window.onclick = (event) => {
              if (event.target == this.modal) {
                  this.closeModal();
              }
          }
      }
      // Method that applies display block to the modal and adds the clicked on img src
      // This saves you from needed multiple modals for each image
      openModal(src) {
          this.modal.style.display = "block";
          this.modalImg.src = src;
      }
  
      // Method that applies display none to the modal
      closeModal() {
          this.modal.style.display = "none";
      }
    }
    
      // Create a new instance 
      // and pass in the modal id (parent) modal img which is used for the selected img source 
      // and the close element that is use to close the modal
      new ImageModal('gallery_modal', 'modal_img', 'close');



  });