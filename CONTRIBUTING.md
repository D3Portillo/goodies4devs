# ¿Colaborar? , yay :heart_eyes::zap: !

Para colaborar ve a [./goodies.toml](./goodies.toml) y agrega un nuevo goodie intentando seguir este formato

```toml
["Heroku"]
description = "Una descripción genial :heart_eyes:"
contributor = "@tuperfildeGH"
website = "https://elurldelgoodie"
type = "tool"
money = "freemium"
```

# Formato

`["El nombre del goodie"]`

| Clave       | Valor                                        | Default     |
| ----------- | -------------------------------------------- | ----------- |
| description | String                                       | ?requerido  |
| contributor | String                                       | @d3portillo |
| website     | String                                       | #           |
| type        | [Tipos de goodies](#tipos-de-goodies)        | none        |
| money       | [Valores de paga](#tipos-de-valores-de-paga) | none        |

# Tipos de goodies

| Clave      | Valor               |
| ---------- | ------------------- |
| tool       | Herramientas        |
| yt         | Youtubers           |
| reading    | Libros / lectura    |
| codecamp   | Codecamps           |
| hack       | Hackathon / Codejam |
| tutorial   | Tutoriales          |
| course     | Cursos              |
| none       | Sin especificar     |
| twitter    | Perfiles de Twitter |
| cheatsheet | CheatSheets         |

# Tipos de valores de paga

| Clave    | Significado                                      |
| -------- | ------------------------------------------------ |
| freemium | Que dicho goodie es freemium                     |
| free     | Que dicho goodie es gratuito                     |
| paid     | Que dicho goodie es de paga                      |
| none     | No se muestra si es gratuito, freemium o de paga |

> Lista de tipos en [./src/types.js](./src/types.js)
> Cualquier PR es bienvenido ! :),
