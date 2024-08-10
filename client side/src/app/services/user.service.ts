import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/user';
import { Experiment } from 'src/app/experiment';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    PrintUsers(experiment : Experiment)
    {
        return this.http.post('https://bagrut.herokuapp.com/api/experiment/printusers',{"idkey" : experiment.manager_id,"id":experiment.Experiment_id})
    }
    register(user: User) {
        return this.http.post('https://bagrut.herokuapp.com/api/manager/insert', {"FirstName": user.firstName,"LastName": user.lastName,"email":user.email,"password":user.password,"current":user.current,"modified":user.modified});
    }
    StartExe(experiment: Experiment) {
        return this.http.post('http://bagrut.herokuapp.com/api/experiment/insert', {"idkey":localStorage.getItem("currentUser"),"name":experiment.name,"manager_id":localStorage.getItem("currentUser"),"template_id":experiment.template_id,"user_ids":experiment.user_ids,"last_pos":experiment.last_pos});
    }
    updateusers(experiment: Experiment) {
        return this.http.post('https://bagrut.herokuapp.com/api/experiment/updateusers', {"idkey":localStorage.getItem("currentUser"),"_id":experiment.Experiment_id,"manager_id":experiment.manager_id,"template_id":experiment.template_id,"users":experiment.users});
    }
    Send(experiment: Experiment) {
        return this.http.post('https://bagrut.herokuapp.com/api/experiment/sendit',{"idkey":"5c89a10b67bf8f3aac54aea4","_id":"5c968a4d29e60c1a10cd4c74"});
    }
    getAll() {
        return this.http.post('https://bagrut.herokuapp.com/api/experiment/managergetall',{"idkey":localStorage.getItem("currentUser")});
    }
    statistics()
    {
        return this.http.post('https://bagrut.herokuapp.com/api/experiment/statistics',{id:localStorage.getItem("currentExe")})
    }
    
    

    
}