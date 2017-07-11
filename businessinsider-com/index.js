Array.prototype.slice.call(document.querySelectorAll('.tp-backdrop.tp-active, .tp-modal')).forEach(function(el){ el.remove(); });
document.body.classList.remove('tp-modal-open');
