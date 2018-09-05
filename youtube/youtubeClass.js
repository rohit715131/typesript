var Youtube = /** @class */ (function () {
    function Youtube(url, title, channel, publishDate, videoCategory, noOfViews, noOfSubscribers, noOfLike, noOfDislike, noOfComments, description) {
        var _this = this;
        //get Url
        this.getUrl = function () {
            return _this.url;
        };
        //get title
        this.getTitle = function () {
            return _this.title;
        };
        //getChannel
        this.getChannel = function () {
            return _this.channel;
        };
        //get Publish Date
        this.getPublishDate = function () {
            return _this.publishDate;
        };
        //get Video Category
        this.getVideoCategory = function () {
            return _this.videoCategory;
        };
        //get no Of views
        this.getNoOfViews = function () {
            return _this.noOfViews;
        };
        //No of Subscribers
        this.getNoOfSubscribers = function () {
            return _this.noOfSubscribers;
        };
        //No Of Likes
        this.getNoOfLikes = function () {
            return _this.noOfLike;
        };
        //get No Of DisLikes
        this.getNoOfDisLikes = function () {
            return _this.noOfDislike;
        };
        //get No Of Comments
        this.getNoOfComments = function () {
            return _this.noOfComments;
        };
        // get description
        this.getDescription = function () {
            return _this.description;
        };
        this.url = url;
        this.title = title;
        this.channel = channel;
        this.publishDate = publishDate;
        this.videoCategory = videoCategory;
        this.noOfViews = noOfViews;
        this.noOfSubscribers = noOfSubscribers;
        this.noOfLike = noOfLike;
        this.noOfDislike = noOfDislike;
        this.noOfComments = noOfComments;
        this.description = description;
    }
    return Youtube;
}());
var videosInform = new Youtube("https://www.youtube.com/watch?v=PFmuCDHHpwk", "Object-oriented Programming in JavaScript: Made Super Simple", "Programmimg code", " 29 Jul 2018", "computer science", 500000, 4000000, 1200, 15, 153, "Object-oriented programming in JavaScript: learn all about objects, prototypes, prototypical ");
console.log("Url:  " + videosInform.getUrl());
console.log("Title: " + videosInform.getTitle());
console.log("Channel: " + videosInform.getChannel());
console.log("Publish date : " + videosInform.getPublishDate());
console.log("Video Category : " + videosInform.getVideoCategory());
console.log("No Of Views : " + videosInform.getNoOfViews());
console.log("No Of Subscribers : " + videosInform.getNoOfSubscribers());
console.log("Total Likes : " + videosInform.getNoOfLikes());
console.log("Total Dislikes : " + videosInform.getNoOfDisLikes());
console.log("Comments : " + videosInform.getNoOfComments());
console.log("Video Description : " + videosInform.getDescription() + "\n");
