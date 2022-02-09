// Class decorator
function setAPIVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}
//decorator - anotar a versão da API
@setAPIVersion('2.0.0')
class API {}

console.log(new API());