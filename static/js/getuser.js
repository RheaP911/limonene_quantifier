// $(document).ready(function () {

//     // $(".login-box").on("submit", function(e) {
//     //     e.preventDefault();
//     //     window.location.assign("/dashboard/")
//     // })

//     $(".login-box").on("submit", function (e) {
//         let username = $("#login-username").val();
//         let password = $("#login-password").val();
//         $.ajax({
//             method: "POST",
//             url: "/api/dashboard/",
//             data: {
//                 username: username,
//                 password: password,
//             },
//             success: function (test) {
//                 localStorage.setItem("FirstName", test[0].FirstName)
//                 localStorage.setItem("LastName", test[0].LastName)
//             }

//         })


//     })
//     try {
//         document.querySelector('.name').textContent = `${localStorage.getItem("FirstName")} ${localStorage.getItem("LastName")}`;
//     } catch (error) {
//         console.log("login first")
//     }
//     $(".logout").on("click", function () {
//         localStorage.clear()
//     })
// });