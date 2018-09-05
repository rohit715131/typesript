class Facebook {
    
    private name:string;
    private dateOfBirth:string;
    private email:string;
    private mobile:string;
    private studyAt:string;
    private location:string;
    private totalFriends:number;
   
//Constrructor Decalaration 
    constructor(name:string,dateOfBirth:string,email:string,mobile:string,studyAt:string,location:string,totalFriends:number){
    
    this.name=name;
    this.dateOfBirth=dateOfBirth;
    this.email=email;
    this.mobile=mobile;
    this.studyAt=studyAt;
    this.location=location;
    this.totalFriends=totalFriends;  
    }
    
    //get Name
    getName=()=>{
        return this.name;
    } 
    //get Date of Birth 
    getDateOfBirth=()=>{
        return this.dateOfBirth;
    }
    //get email
    getEmail=()=>{
        return this.email;
    } 
    //get mobile number
    getMobile=()=>{
        return this.mobile;
    }
   
    //get studyAt
    getStudyAt=()=>{
        return this.studyAt;
    }
    //get location 
    getlocation=()=>{
        return this.location;
    }
    // get total friends
    gettotalFriends=()=>{
        return this.totalFriends;
    }
}
//Object Declaration  
let fbInfo= new Facebook ('Rohit Kumar','11 october 1995','rohit715131@gmail.com','9654732998','GNIOT','Bangalore',2000);

console.log(`Get Name : ${fbInfo.getName()}`);
console.log(`Date Of Birth : ${fbInfo.getDateOfBirth()}`);
console.log(`Get Email Info : ${fbInfo.getEmail()}`);
console.log(`Get Mobile : ${fbInfo.getMobile()}`);
console.log(`Study At :${fbInfo.getStudyAt()}`);
console.log(`My location :${fbInfo.getlocation()}`);
console.log(`Total Friends : ${fbInfo.gettotalFriends()}`);
