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

| Clave       | Valor                                     | Default     |
| ----------- | ----------------------------------------- | ----------- |
| description | String                                    | ?requerido  |
| contributor | String                                    | @d3portillo |
| website     | String                                    | #           |
| type        | [Una de estas](#tipos-de-goodies)         | none        |
| money       | [Una de estas](#tipos-de-valores-de-paga) | none        |

# Tipos de goodies

| Clave | Valor |
|-------|-------|
| tool | Herramientas |
| yt | Youtubers |
| reading | Libros / lectura |
| codecamp | Codecamps |
| hack | Hackathon / Codejam |
| tutorial | Tutoriales |
| course | Cursos |
| none | Sin especificar |
| twitter | Perfiles de Twitter |
| cheatshee | Cheat Sheets |

# Tipos de valores de paga

| Clave    | Significado                                      |
|--------- |------------------------------------------------- |
| freemium | Que dicho goodie es freemium                     |
| free     | Que dicho goodie es gratuito                     |
| paid     | Que dicho goodie es de paga                      |
| none     | No se muestra si es de paga, freemium o gratuito |

> Lista de tipos en [./goodieTypes.js](./goodieTypes.js)
> Cualquier PR es bienvenido ! :), 
<br/>PD: Ayuda integrando las GH actions porfa :raised_hands: [./.github/workflows](./.github/workflows/nodejs.yml),