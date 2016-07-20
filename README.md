# gridCoordinates
Utility for converting lat-lng coordinates to gridded Equirectangular coordinates. Only two simple functions are included.

The current functionality is very basic and only works for 1/4 degree equirectangular coordinates. No rounding occurs when converting to grid cells, so you can decide on your own how to react based on 'where' in a grid cell your lat lng point is.

```
a = latLngToGrid({lat:0, lng:0}) //-> a = {x:719.5, y:359.5}

b = gridToLatLng({x:0, y:0}) //-> b = {lat: 89.875, lng:-179.875}
```

![Example of grid conversion](http://i.imgur.com/40mD0jE.png)

Note: This image only showns one grid line every 10 degrees for clarity.

##Development Ideas
Future plans should include an input parameter for size of gridded coordinates, as well as options to set a different starting point for grid cell (0,0). If you make any of these changes when using this library, please create a pull request so they can be shared.


