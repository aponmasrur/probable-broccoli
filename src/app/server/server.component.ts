import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    serverId = 10;
    state = 'offline';
    
    constructor(){
        this.serverId = Math.round(Math.random()*10);
        this.getState();
    }
    getState(){
        this.state = this.serverId > 5 ? 'online' : 'offline';
    }
    getColor(){
        return this.serverId > 5 ? 'green' : 'orange';
    }


}