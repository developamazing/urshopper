import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'http://api.ushopper.net/';
    public ApiUrl = 'offerprocessing/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}