import swal from "sweetalert";

const SweatAlert = (options) => {
  return new Promise((resolve) => {
    swal({
      title: options.title || "Are you sure?",
      text: options?.text,
      icon: options?.icon || "warning",
      buttons: {
        yes: {
          text: "نعم",
          value: true,
          className: "swal-btn-yes", 
        },
        no: {
          text: "لا",
          value: false,
          className: "swal-btn-no",
        },
      },
      dangerMode: options.dangerMode || true,
    }).then((willDelete) => {
      resolve(willDelete);
    });
  });
};

export default SweatAlert;