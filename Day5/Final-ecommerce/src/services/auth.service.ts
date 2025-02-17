
export class Authservice{


  private authUsers: Array<any> = [
    { email: 'laxmi27patil@gmail.com', password: "Pass@2708" },
    { email: ' abc@gmail.com ', password: "abc123" },
  
  ];

  constructor() { }

  // Method to validate user credentials
  public validateUser(username: string, password: string): boolean {
    let userFound = false;

    for (let user of this.authUsers) {
        if (user.email === username && user.password === password) {
            userFound = true;    
            sessionStorage.setItem('auth', JSON.stringify(user));       
            break; // Exit the loop once we find a match
        }
    }   
    return userFound;
  }

  public getuserdetails() : Array<any> {

    const storedCart = sessionStorage.getItem('auth');
    if (storedCart) {
      return JSON.parse(storedCart);
    }
    return [];  // If no cart is stored, return an empty array
  }

}