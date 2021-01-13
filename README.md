### General Assembly Software Engineering Immersive

# Project 2 - 48 Hour Reacathon -  JustEat App

## The Overview 
This project is a Pair Programming task - set as part of the Software Engineering Immersive Course from General Assembly.

The task was to fully develop an App in react, whilst working with API and public databases over a set period of time.

Our decided application is based off of the JustEat API, using ReactJS and various tools such and a Package Manager, Transpiler and Module Bundler.

Find it Here! --> [Just Eat App 🍕](https://prodigresser.github.io/project-2/)

### The Brief

- Build a React Application
- Make use of at least one Public API
- The App requires several components
- Develop with Wireframes
- Deploy Online
- GitHub & Github Pages

### Technologies Used

- React and JSX
- Node Package Manager
- Babel Transpiler
- Webpack

## The App
In order to effectively develop this app as a team, we worked methodically through the development process.

1. Firstly we developed a wireframe with core API details, page layout and page structure
2. Then we identified the API endpoints we would require for the project and tested for practicality
3. We then started with coding the frame of the site - creating basic components and a BrowserRouter.
4. With the frame in place, we started on the core logic - Webhooks and UseState in order to access and manipulate our APIs information.
5. With logic in place, we then worked separately - retrieving relevant information from the APIs and formatting and styling the pages.

### The Wireframe & Endpoints
Quite a simple wireframe was developed, but it had the core concepts in place including details for structure.

![wireframe](READMEdocuments/wireframe.png)

- This includes the need for a way to validate a Postcode on page 1.
- Using the Postcode as a prop for the JustEat API Endpoint on page 2.
- And finally to use the state data 'Address' for the Google Maps Static API.

Here is an example of a the [Postcode.io](https://postcodes.io/) Endpoint:

```http
api.postcodes.io/postcodes/:postcode
```
Response examples:
```json
{
  "status": 200,    //OK
  "result": {
    ...
  }
}
```
```json
{
    "status": 404,  //INVALID
    "error": "Invalid postcode"
}
```


### Components and Routers

In order to develop an easy to navigate structure, we found it important to set out our components and routers early on. 

Here is an example of the components imported for a 'Rest' component -
```javascript
import RestDetails from './RestDetails'
import RestOrders from './RestOrders'

```
This is an example of the BrowserRouter in the App.js component - 

```html
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/project-2/restlist/rest/:restId" component={Rest}/>
      <Route exact path="/project-2/restlist/:postcode" component={Restlist}/>
      <Route exact path="/project-2/authors/" component={Authors} />
      <Route exact path="/project-2" component={Main}/>
    </Switch>
  </BrowserRouter>
```

### Webhooks and Use State

With the endpoints identified and the structure of the site laid out, the next step was to access the endpoints with the inputs that we gave it. Webhooks help us access that information on request - once it is saved in state we can then manipulate the information it gives us. The key part of the site - the List of Restaurants - is where the JustEat API is accessed. Once a location is selected - an object containing the location data is provided as a prop to the next page. 

Here is an example of the webhook used to capture the [JestEat API](https://uk.api.just-eat.io/docs) using the 'axios' extension, performed once with the ``` useEffect((), [])``` function-

```javascript
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://uk.api.just-eat.io/restaurants/bypostcode/${postcode}`)
      updateRestList(data)
    }
    fetchData()
  }, [])
```

Here is an example of a piece of the JustEat API - one of the locations - 
```json
{
  "Id": 48279,
  "Name": "Xing Long",
  "UniqueName": "xinglong-se4",
  "Address": {
    "City": "London",
    "FirstLine": "433 Brockley Road",
    "Postcode": "SE4 2PJ",
    "Latitude": 51.452916,
    "Longitude": -0.038282
  },
  "City": "London",
  "Postcode": "SE4 2PJ",
  "Latitude": 0.0,
  "Longitude": 0.0,
  "Rating": {
  "Count": 3712,
  "Average": 5.07,
  "StarRating": 5.07
  },
...
}
```

Finally here is an example of how some of this data is returned in JSX, including the location data saved passed on in the Link through 'state' -
```javascript
return <Link
  style={{ color: '#2C3531', textDecoration: 'none' }}
  key={i}
  to={{
  pathname: `/project-2/restlist/rest/${rest.Id}`,
  state: { rest }
  }}
>
  <div className="card">
    <h1 className="cardTitle">{rest.Name}</h1>
    <div className="container">
      <img className="logo" src={rest.LogoUrl} alt="logo" />
      <ul>
        {rest.Cuisines.map((cuisine, i) => {
          return <li key={i}>
            {cuisine.Name}
          </li>
        })}
      </ul>
    </div>
  </div>
</Link>
```

### Formatting and Style Components

Finally - the visual style of the site was of great importance. It was apparent that a mobile first design was important to the usability of the application. A clean layout with a coherent color scheme and easy to read information are also key for a good user experience.

Here is an example of a location card -

![Restaurant Card](READMEdocuments/restcard.png) 

Here is an example of a [Static Google Maps API](https://cloud.google.com/maps-platform/) for a location - 

![Map](READMEdocuments/map.png)

Here is an example of the Star Rating component =

![Star Rating](READMEdocuments/star.png)

Link to the component here - [React-Star-Component](https://www.npmjs.com/package/react-star-rating-component)

Finally here is the color pallette used for the site design - 

![Color Pallette](READMEdocuments/colorpalette.png)

### Key Learnings
This was my first time working with someone else so there were a lot of things to learn - for example setting personal preferneces aside regarding functionality in order to meet the set deadline. I also really cemented my understadning of how APIs work and how to manipulate the data that comes out of them. It was also a good opportunity to practice using useState in React, which was a realtively new concept. I think the biggest barrier was that we created this before we were really taught how to use github for collaboration, so HUGE efforst were required to communicate clearly and we were dropping files backwards and forwards over slack. 



Link ---> [Just Eat App](https://prodigresser.github.io/project-2/) 

![just_eat](READMEdocuments/project-2-screenshot.png)
