class Youtube {
    private url: string;
    private title: string;
    private channel: string;
    private publishDate: string;
    private videoCategory: string;
    private noOfViews: number;
    private noOfSubscribers: number;
    private noOfLike:number;
    private noOfDislike:number;
    private noOfComments:number;
    private description:string;
    
    constructor(url: string, title: string, channel: string, publishDate: string, videoCategory: string, noOfViews: number, noOfSubscribers: number, noOfLike: number, noOfDislike: number, noOfComments: number, description: string) {
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
    //get Url
    getUrl=()=>{
        return this.url;
    }
    //get title
    getTitle=()=>{
        return this.title;
    }
    //getChannel
    getChannel=()=>{
        return this.channel;

    }
    //get Publish Date
    getPublishDate=()=>{
        return this.publishDate;
    }
    //get Video Category
    getVideoCategory=()=>{
        return this.videoCategory;
    }
    //get no Of views
    getNoOfViews=()=>{
       return this.noOfViews;
    }
   
    //No of Subscribers
    getNoOfSubscribers=()=>{
        return this.noOfSubscribers;
    }
   
    //No Of Likes
    getNoOfLikes=()=>{
        return this.noOfLike;
    }
    
    //get No Of DisLikes
    getNoOfDisLikes=()=>{
        return this.noOfDislike;
    }
  
    //get No Of Comments
    getNoOfComments=()=>{
        return this.noOfComments;
    } 
  // get description
    getDescription=()=>{
        return this.description;
    }

}
let videosInform= new Youtube ("https://www.youtube.com/watch?v=PFmuCDHHpwk","Object-oriented Programming in JavaScript: Made Super Simple","Programmimg code"," 29 Jul 2018","computer science",500000,4000000,1200,15,153,"Object-oriented programming in JavaScript: learn all about objects, prototypes, prototypical ");

console.log(`Url:  ${videosInform.getUrl()}`);
console.log(`Title: ${videosInform.getTitle()}`);
console.log(`Channel: ${videosInform.getChannel()}`);
console.log(`Publish date : ${videosInform.getPublishDate()}`);
console.log(`Video Category : ${videosInform.getVideoCategory()}`);
console.log(`No Of Views : ${videosInform.getNoOfViews()}`);
console.log(`No Of Subscribers : ${videosInform.getNoOfSubscribers()}`);
console.log(`Total Likes : ${videosInform.getNoOfLikes()}`);
console.log(`Total Dislikes : ${videosInform.getNoOfDisLikes()}`);
console.log(`Comments : ${videosInform.getNoOfComments()}`);
console.log(`Video Description : ${videosInform.getDescription()}\n`);
