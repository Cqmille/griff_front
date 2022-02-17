import { Component, Prop, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
    tag: 'user-inscription-valid',
    shadow: false,
  })

  export class UserInscription {

    @Prop() history: RouterHistory;
  render() {
    return (
      <div>
          <p>
            Compte créer avec succès, vous pouvez vous connecter.
            Vous pouvez vous <a href="/connexion">connecté</a> 
          </p>
      </div>
    );
  }
}