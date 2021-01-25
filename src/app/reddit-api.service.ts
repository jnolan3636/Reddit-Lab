import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Post {
  title: string;
  link: string;
  image: string;
  // title: string;
  // permalink: string;
  // thumbnail: string;
}

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  public awwPost: Post[] = [];
  
  constructor(private http:HttpClient) { }
  // urlString: string = 'https://www.reddit.com/r/aww/.json';

  getPost(){
    const url ="https://www.reddit.com/r/aww/.json";
    this.http.get(url).subscribe(
      (response: any) => {
        console.log(response);
        const posts = response.data.children;
        for (let post of posts) {
          
          const redditPost : Post = {
            title: post.data.title,
            link: "https://reddit.com" + post.data.permalink,
            image: post.data.thumbnail,
          };
          this.awwPost.push(redditPost);
        }
      },
      (error) => {
        console.log(error);
      }
  
    )
    // return this.http.get(this.urlString).subscribe(
    //   (data) => {
    //     console.log(data);
    //     for (const key in data) {
    //       if(Object.prototype.hasOwnProperty.call(data,key)) {
    //         const awwPost = data[key];
    //         this.awwPost.push(awwPost);
    //       }
    //     }
    //   },
    //   (error) =>console.log(error)
    // );
    
  
        
    //   }
     }
    }