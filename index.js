$(document).ready(function(){
    let comments = [];

    // regular expression to check that comment is not empty //
    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

    // adds formatted comment to DOM and clears value of comment box if comment is not empty
    function postComment() {
        let user = {};
        user.comment = $('#comment')[0].value;

        if(!isBlank(user.comment)) {
            user.name = "Test user";
            user.time = moment().format("M/DD/YY, h:mm a");
            comments.push(user);
            $("#comment").val('');

            $("#comments-list").append(
                `<li><strong>${user.name}</strong><br/><small>${user.time}</small><br/>${user.comment}</li>`);
        }
    }

    // checks height of the comments container and scrolls to that height in order to show the most recent comment
    function showLastComment() {
        let commentsHeight = $("#comments-list")[0].scrollHeight;
        window.scrollTo(0, commentsHeight);
    }

    // stops form from refreshing the page and then adds the comment and scrolls to the most recent comment
    $('#comments-form').submit(function (e) {
        e.preventDefault();
        postComment();
        showLastComment();
    });
});
