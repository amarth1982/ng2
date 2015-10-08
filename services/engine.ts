import {bind, Inject} from 'angular2/angular2'

export class Engine{
    isTurboCharged : boolean
    cylinders : number
    EmissionTest(co2Level : number) : boolean{
      return false
    }
}

export class PetrolEngine implements Engine{
  public isTurboCharged : boolean
  public cylinders : number

  constructor(@Inject('allowedCo2Level') private allowedCo2Level : number){}

  EmissionTest(co2Level : number) : boolean{
    return this.allowedCo2Level < co2Level
  }
}

export class DieselEngine implements Engine{
  public isTurboCharged : boolean
  public cylinders : number
  public hasEmbeddedCheatChip : boolean

  constructor(@Inject('allowedCo2Level') private allowedCo2Level : number){}

  EmissionTest(co2Level : number) : boolean{
    if(this.hasEmbeddedCheatChip)
      return true

    return this.allowedCo2Level < co2Level
  }
}
export testbinding =
  bind(PetrolEngine).toClass(PetrolEngine)
export let ENGINE_BINDING = [
  bind(PetrolEngine).toClass(PetrolEngine),
  bind(DieselEngine).toClass(DieselEngine)
]
