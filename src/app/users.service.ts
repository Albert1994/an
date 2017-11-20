import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService{

    constructor(private http:Http){ }

    getUsers(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=10&nat=gb%27');
    }

    users = [
        {name: 'Al 1'},
        {name: 'Al 2'},
        {name: 'Al 3'},
        {name: 'Al 4'},
        {name: 'Al 5'}
      ]
}