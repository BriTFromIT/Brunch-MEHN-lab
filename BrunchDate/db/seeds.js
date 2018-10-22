let Brunch = require('../models/BRUNCH')

let newBrunch = [
    {
        title: 'Pepper’d Potato Frittata',
        description: 'Like omelets and quiches, a nice frittata recipe is also a popular dish for breakfast and brunch. For the most part, Frittata recipes are super-versatile and super simple. From cheese lovers, to meat lovers, frittatas are popular with any crowd. This creamy, cheesy skillet-cooked pepper’d potato frittata gets a nice shot of color and flavor from green pepper rings and bits of chopped bacon.',
        img: 'http://assets.kraftfoods.com/recipe_images/opendeploy/113397_640x428.jpg',
        instructions: {
            ['Heat oven to 350°F',
                'Cook bacon in medium nonstick ovenproof skillet 4 min',
                'drain. Add potatoes and onions',
                'cook 7 min. or until crisp-tender',
                'stirring frequently',
                'Stir in eggs. Remove from heat. Top with cheese and peppers; cover.',
                'Bake 20 to 25 min. or until center is set'
            ]
        },
    ingredients: {
            [
                '6 slices of chopped bacon',
                '1 cup shredded potatoes',
                '1/4 cup chopped onions', 
                '6 eggs, beaten', 
                '1 cup Shredded Cheddar Pepper Jack Cheese', 
                '1/2 cup green pepper rings'
            ]
    }
  }
 

//   {
//     name: 'Plain Ole Donut',
//     description: 'Plain donut for plain people.',
//     img: 'https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg',
//   price: 25,
//     qty: 15
        
            
//                 name: 'Chocolate',
//                     description: 'Chocolate Donut nom nom nom',
//   img:
//     'https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg',
//     price: 7000,
//         qty: 1
            
    
//         name: 'Donut Holes',
//             description: 'For the snackers.',
//   img:
//     'http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg',
//     price: 10,
//         qty: 23
            
    
        
            Brunch.create(newBrunch).then(brunches => {
console.log('Saved Brunches', brunches)
})

