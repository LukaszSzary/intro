import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common'
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgFor, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe],
  providers: [DataService], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'introooooooooo';
  myButton : string = 'My button';
  count : number = 0;
  isDisabled : boolean = true ;
  text :string = "";
  user : string = "Maciek";
  isLoggedIn : boolean = true;
  data : string[] = [];  
  fruts: string[] = ['apple', 'banana', 'pinaple'];
  today : number = Date.now();
  posts: Data[] = [];
  str: string[] = [];

  user2: Observable<any>;

   
  increamentCount(){
    this.count++;
   }
   


   constructor(private dataService: DataService, private userService: UserService){
    this.data = this.dataService.getData(); 
    this.user2 = this.userService.getUser();
   }
   
   ngOnInit() {
    // this.dataService.getPosts().subscribe({
    //   next: (response: Data[]) => {
    //     this.posts = response;
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //   }
    // });
    
    this.str = this.dataService.getData();
  }
}
  