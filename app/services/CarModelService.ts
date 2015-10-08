import {Injectable, Observable} from 'angular2/angular2'
import {Http} from 'angular2/http'

enum EngineType{
  v4,
  v6,
  v8,
  v12,
  Diesel
}

class Engine{
  public type:EngineType
}

class Model{
  public name: string
  public year: string
}

class CarModel{
  constructor(public model:Model, public engine:Engine){

  }
}

//This decorator is optional
@Injectable()
export class CarModelService{
  private _url = '/carmodels.json'


  private _CarModelsState : Observable<CarModel>


  constructor(private _http: Http){

  }
}
