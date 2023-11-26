const notyf = new Notyf({
    types: [
      {
        type: 'warning',
        background: 'orange',
        icon: {
          className: 'notyf__icon--error',
          tagName: 'i',
        },
      },
      {
        type: 'info',
        background: 'deepskyblue',
        icon: {
          className: 'notyf__icon--success',
          tagName: 'i',
        },
      },
    ]
  });
  document.addEventListener('toast', function (event){
  const {type, message} = event.detail;
  notyf.open({type,message});
});
