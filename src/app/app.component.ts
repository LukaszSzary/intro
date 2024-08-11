import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe } from '@angular/common'
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { signal, computed } from '@angular/core';
import { Todo } from './interfaces/todo';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

 
interface User{
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, NgFor, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe, ReactiveFormsModule],
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

 
  user3: User = {
    name: '',
    email: '',
  }

  submitForm(form: any){
    if(form.valid){
      console.log(form.value, this.user3)
    }
  }

  



  user2: Observable<any>;

   
  increamentCount(){
    this.count++;
   }
   
   userForm2!: FormGroup;


   constructor(private dataService: DataService, private userService: UserService, private formBuilder: FormBuilder){
    this.data = this.dataService.getData(); 
    this.user2 = this.userService.getUser();
    this.userForm2 = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ],
    ],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
    })
    })
   }

   submitForm2(){
    if(this.userForm2.valid)
      console.log(this.userForm2)
   }
   
  //  ngOnInit() {
  //   // this.dataService.getPosts().subscribe({
  //   //   next: (response: Data[]) => {
  //   //     this.posts = response;
  //   //   },
  //   //   error: (error: any) => {
  //   //     console.log(error);
  //   //   }
  //   // });
    
  //   this.str = this.dataService.getData();
  // }

  count2 = signal<number>(0);
todos = signal<Todo[]>([]);
newTodoText = signal<string>('');

   total = computed(() => this.todos().length);   

  ngOnInit(){
    console.log(this.count2());
  }

  handleInput(event: Event){
    const input = event?.target as HTMLInputElement;
    this.newTodoText.set(input?.value);
  }
  
  addTodo(){
    if(this.newTodoText().trim().length){
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText()
      }
      this.todos.set([...this.todos(), newTodo]);
      this.newTodoText.set('');
    }
  }

  deleteTodo(id: number){
    const updatedTodo = this.todos().filter((todo) => todo.id !== id); 
    this.todos.set(updatedTodo);
  }
   
}
  