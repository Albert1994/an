import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

    size = 8;

    constructor(private http:Http){ }

    getUsers(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size +'&nat=gb')
        .map(response => response.json())
        .map(response => response.results)
        .map(users => {
            return users.map(u => {
                return  { 
                    name: u.name.title + ' ' + u.name.first + ' ' + u.name.last,
                    image: u.picture.large,
                    geo:  u.location.city + '/' + u.location.state + '/' + u.location.street
                }
            })
        })
    }

    setSize(size){
        this.size = size;
    }

    users = [
        {name: 'Al 1'},
        {name: 'Al 2'},
        {name: 'Al 3'},
        {name: 'Al 4'},
        {name: 'Al 5'}
      ]
}