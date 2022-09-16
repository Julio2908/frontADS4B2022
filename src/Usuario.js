import React from 'react';
import { Link } from "react-router-dom";

export default function Usuario(){
   return (
       <div>
            <html> 
            <h1>Usuário</h1>            
            <head> 
            <title>--Formulário Contato--</title> 
            <meta charset="utf-8" /> 
            <link href="ContatoEstilo.css" rel="stylesheet" media="all" /> <script src="JavaScript1.js"></script>
            </head> 
            <body> 
            <form name="meu_form"> <h1>Entre em contato</h1> 

            <input type="text" id="nomeid" placeholder="Nome" required="required" name="nome" /> 
            <label for="nome">Nome</label> 

            <input type="tel" id="foneid" placeholder="(xx)xxxxx-xxxx" required="required" name="fone" /> 
            <label for="fone">Fone</label> 

            <input type="email" id="emailid" placeholder="Exemplo@email.com" required="required" name="email" /> 
            <label for="email">Email</label> 

            <textarea placeholder="Deixe sua opnião"></textarea> 
            <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
            <input type="submit" class="dados" onclick="Dados();" value="Dados" />

            </form> 
            </body> 
            </html>
           
           <Link to="/">retornar a página inicial</Link>
       </div>
   );
}
