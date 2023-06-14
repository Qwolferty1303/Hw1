        // 1)
        class User {
            constructor(name, id) {
              this.name = name;
              this.id = id;
            }
          }
        // 2)
        class User {
            constructor(name, id) {
                this.name = name;
                this.id = id;
            }
        }
        const user1 = new User("John", 1);
        const user2 = new User("Alice", 2);
        // 3)
        class User {
            constructor(name, id) {
                this.name = name;
                this.id = id;
            }
            talk() {
                console.log("I can talk");
            }
        }
        const user1 = new User("John", 1);
        const user2 = new User("Alice", 2);
        const user3 = new User("Bob", 3);
        user3.talk();
        // 4)
        class User {
            constructor(name, id) {
                this.name = name;
                this.id = id;
            }

            talk() {
                console.log("I can talk");
            }
        }
        const user3 = new User("Bob", 3);
        user3.talk();