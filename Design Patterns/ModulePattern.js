class MyModule {
  #privateChar = "I'm private";

  #getPrivateChar = () => {
    console.log("I'm private method");
  };

  publicMethod = () => {
    console.log("I'm public method");
  };
}

const mm = new MyModule();

mm.publicMethod(); //I'm public method
// mm.#getPrivateChar(); //Property '#getPrivateChar' is not accessible outside class 'MyModule' because it has a private identifier.
// mm.#privateChar; //Property '#privateChar' is not accessible outside class 'MyModule' because it has a private identifier.
