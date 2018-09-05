var Facebook = /** @class */ (function () {
    //Constrructor Decalaration 
    function Facebook(name, dateOfBirth, email, mobile, studyAt, location, totalFriends) {
        var _this = this;
        //get Name
        this.getName = function () {
            return _this.name;
        };
        //get Date of Birth 
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        //get email
        this.getEmail = function () {
            return _this.email;
        };
        //get mobile number
        this.getMobile = function () {
            return _this.mobile;
        };
        //get studyAt
        this.getStudyAt = function () {
            return _this.studyAt;
        };
        //get location 
        this.getlocation = function () {
            return _this.location;
        };
        // get total friends
        this.gettotalFriends = function () {
            return _this.totalFriends;
        };
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.mobile = mobile;
        this.studyAt = studyAt;
        this.location = location;
        this.totalFriends = totalFriends;
    }
    return Facebook;
}());
//Object Declaration  
var fbInfo = new Facebook('Rohit Kumar', '11 october 1995', 'rohit715131@gmail.com', '9654732998', 'GNIOT', 'Bangalore', 2000);
// console.log(`Profile Url : ${fbInfo.getUrl()}`);
console.log("Get Name : " + fbInfo.getName());
console.log("Date Of Birth : " + fbInfo.getDateOfBirth());
console.log("Get Email Info : " + fbInfo.getEmail());
console.log("Get Mobile : " + fbInfo.getMobile());
console.log("Study At :" + fbInfo.getStudyAt());
console.log("My location :" + fbInfo.getlocation());
console.log("Total Friends : " + fbInfo.gettotalFriends());
