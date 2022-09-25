import {StatusBar} from 'expo-status-bar';
import {ScrollView} from 'react-native';
import Recipe from "./components/Recipe";

export default function App() {
    const recipesData = [{
        name: "Bacon bolognese",
        image: {
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1295451_8-654d62f.jpg?resize=960,872?quality=90&webp=true&resize=300,272"
        },
        ingredients: ["400g spaghetti",
            "1 tsp olive oil",
            "2 large carrots , finely diced",
            "3 celery sticks, finely diced",
            "200g pack smoked bacon lardon",
            "190g jar sundried tomato pesto",
            "8-12 basil leaves , shredded (optional)"],
        steps: [
            "Boil the spaghetti following pack instructions. Meanwhile, heat the oil in a non-stick pan. Add the carrots, celery and bacon, and stir well. Cover the pan and cook, stirring occasionally, for 10 mins until the veg has softened.",
            "Tip in the pesto, warm through, then stir through the drained spaghetti with the basil, if using."],
    },
        {
            name: "Cola ham with maple & mustard glaze",
            image: {
                uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1163498_11-b5b7bf8.jpg?resize=960,872?quality=90&webp=true&resize=300,272"
            },
            ingredients: ["2kg unsmoked boneless gammon joint",
                "2l cola (not diet)",
                "1 carrot, chopped",
                "1 onion, peeled and quartered",
                "1 stick celery, chopped",
                "1 cinnamon stick",
                "½ tbsp peppercorns",
                "1 bay leaf",
                "150ml maple syrup",
                "2 tbsp wholegrain mustard",
                "2 tbsp red wine vinegar",
                "pinch of ground cloves or five-spice"],
            steps: ["Put 2kg unsmoked boneless gammon joint in a large pan and cover with 2l cola. Add 1 chopped carrot, 1 quartered onion, 1 chopped celery stick, 1 cinnamon stick, ½ tbsp peppercorns and 1 bay leaf.",
                "Bring to the boil, then turn down to simmer for around 2 ½ hrs, topping up with boiling water if necessary to keep the gammon fully covered.",
                "Carefully pour the liquid away, then let the ham cool a little while you heat the oven to 190C/170C fan/gas 5.",
                "Lift the ham into a roasting tin, then cut away the skin leaving behind an even layer of fat. Score the fat all over in a criss-cross pattern.",
                "Mix 150ml maple syrup, 2 tbsp wholegrain mustard, 2 tbsp red wine vinegar and a pinch of ground cloves or five-spice in a jug.",
                "Pour half over the fat, roast for 15 mins, then pour over the rest and return to the oven for another 30 mins, baste half way through.",
                "Remove from the oven and allow to rest for 10 mins, then spoon more glaze over the top. Can be roasted on the day or up to 2 days ahead and served cold."],
        },
        {
            name: "Rib-eye steak with red wine & pastrami sauce",
            image: {
                uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rib-eye-steak-with-red-wine-and-pastrami-sauce-948f28f.jpg?resize=960,872?quality=90&webp=true&resize=300,272"
            },
            ingredients: ["2 rib-eye steaks (about 250g each)",
                "2 tbsp vegetable oil",
                "80g butter",
                "2 garlic cloves",
                "2 thyme sprigs",
                "½ lemon , juiced",
                "1 shallot , finely chopped",
                "100ml red wine",
                "200ml fresh beef stock",
                "50g pastrami , finely chopped",
                "1 green chilli , deseeded and chopped",
                "1 tbsp chopped parsley",
                "chips (use ready-made or see 'Goes well with' for recipe) and gherkin ketchup, to serve"],
            steps: ["Season the steaks with salt. Heat the oil in a frying pan large enough to fit both steaks, then add half the butter and once melted and foaming, add the garlic and thyme. Carefully put the steak in the pan and cook for 3 mins for rare, 4 mins for medium and 6 mins for well done, flip the steak and repeat. Once cooked, add a squeeze of lemon juice to the pan and spoon the lemony butter over the steak. Transfer the steaks to a warm plate and cover.",
                "Pour off the fat from the pan, discard the garlic and thyme and wipe out with kitchen paper. Place the pan back on the heat, add half the remaining butter, and once melted, add the shallot and fry for 30 seconds, then add the wine and reduce to a glaze. Pour in the stock and bring up to the boil, then add the pastrami and chilli and warm through. Finally, stir in the parsley. Put the steaks on plates and spoon over the sauce, with the ketchup (see recipe below) and chips on the side."],
        },
        {
            name: "Roast pork with crackling",
            image: {
                uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1163555_11-e51acdc.jpg?resize=960,872?quality=90&webp=true&resize=300,272"
            },
            ingredients: ["1.8kg piece of rolled and tied pork loin with the skin scored",
                "2 garlic cloves, sliced into thin slivers",
                "small bunch rosemary, broken into small sprigs",
                "3 bay leaves, torn",
                "1 onion, roughly chopped", "1 large carrot, chopped",
                "1 Bramley apple, peeled, quartered, cored and roughly sliced",
                "1 tbsp sunflower oil",
                "2 tbsp plain flour",
                "100ml good quality cider",
                "500ml vegetable or chicken stock"],
            steps: ["If you have time, rub salt in the pork skin 2 hours before cooking and leave it uncovered in the fridge. Heat the oven to 230C/210C fan/gas 8. Turn the pork rind-side down and with a small knife make about 6 deep incisions along the meat. Poke a sliver of garlic, a piece of rosemary and bay in each incision and turn the pork the right way up. If you didn’t salt the pork earlier salt the skin now.",
                "Mix the carrot, onion and apple and scatter along the middle of a shallow roasting tray to make a bed for the pork to sit on. Sit the pork on the vegetables and rub the skin with the oil. Place the pork in the oven and leave for 15 mins then turn the heat down to 180C/160C fan/gas 4 and continue to roast for 1hr 30 mins. If after this time you don’t have brilliant crackling turn the heat up again and check every 5 mins until the skin has crackled.",
                "Remove the pork from the roasting tray to a board to rest and pour off all but about 2 tbsp of fat from the tray. If your tray is robust enough to go on the heat then do so, if not scrape the contents into a shallow saucepan and place on the heat. Stir the flour in with the veg and cook until you have a mushy, dark amber paste then splash in the cider and bubble down to a thick paste again. Pour in the stock and simmer everything for 8-10 mins until you have thickened gravy. Strain the sauce into another saucepan pushing as much puréed apple as you can through the sieve. Simmer again and season to taste.",
                "Carve the pork loin with crackling attached into slices using a serrated knife and serve with your favourite vegetables and the apple and cider gravy."],
        },
        {
            name: "Pecan chocolate bread and butter pudding",
            image: {
                uri: "https://img.delicious.com.au/ubD_kL5T/w759-h506-cfill/del/2020/08/pecan-chocolate-bread-and-butter-pudding-137408-2.jpg"
            },
            ingredients: [
                "550g thick-sliced white bread, crusts removed",
                "Unsalted butter, at room temperature",
                "6 eggs, lightly beaten",
                "60g caster sugar",
                "2 tsp cocoa, sifted, plus extra to serve",
                "140g dark (70%) chocolate buttons",
                "300ml pure (thin) cream",
                "1 tsp vanilla bean paste",
                "Finely grated zest of 1 orange",
                "300ml milk",
                "1/4 cup (30g) chopped pecans",
                "30g sultanas",
                "Vanilla ice cream, to serve"],
            steps: [" Preheat oven to 160°C. Grease a 25cm (1.25L capacity) round baking dish and line the base and side with baking paper (the lining here is optional).",
                "Spread both sides of the bread with butter and cut each slice in half widthwise. Set aside.",
                "Place the eggs and sugar in a large bowl and whisk until combined, then stir in cocoa and half of the chocolate.",
                "Place the cream, vanilla and orange zest in a small saucepan over medium-high heat and bring just to a simmer. While stirring gently with a whisk, pour the hot cream mixture over the egg mixture and stir continuously until the chocolate has melted. Stir in the milk to cool the mixture, strain through a fine sieve and set aside.",
                "Arrange bread upright in prepared pan, sprinkling pecans, sultanas and remaining chocolate between each piece. Pour chocolate cream mixture over, making sure all bread is coated. Set aside for 15-20 minutes for bread to soak up mixture. Bake for 35-40 minutes until edges are set but centre has a wobble. Remove from oven and set aside to cool slightly. Dust with cocoa and serve with ice cream. "],
        },
        {
            name: "Chocolate mousse with cherry ripe truffles",
            image: {
                uri: "https://img.delicious.com.au/VSsW4XBx/w759-h506-cfill/del/2022/05/chocolate-mousse-with-cherry-ripe-168604-1.png"
            },
            ingredients: [
                "4 eggs, room temperature",
                "80g caster sugar",
                "150g dark chocolate, melted",
                "350ml thickened cream, whipped to soft peaks",
                "200g frozen raspberries",
                "50g pure icing sugar",
                "200g glace cherries",
                "100g desiccated coconut",
                "50g cocoa powder"],
            steps: ["To make the mousse, place eggs in the bowl of a stand mixer with the whisk attachment. Set aside.",
                "Place sugar in a small saucepan with 2 tbs (40ml) water and bring to the boil.",
                "At this point, start whisking eggs on high. Cook sugar syrup for 3 minutes or until starting to thicken. With the motor running, gently pour syrup into eggs in a steady stream where the edge of the bowl and egg meet. Continue whisking for 5 minutes on high speed (this incorporates air and will make your mousse light and fluffy). Once egg mixture has tripled in volume, transfer to a large clean bowl, scraping out all the mixture. Quickly add the chocolate and whisk until the chocolate is emulsified (work quickly to prevent it setting before it’s all incorporated). Fold in the cream, scraping the sides with a spatula if necessary. Continue folding until the mixture is glossy and smooth, and there are no cream or egg pockets.",
                "Divide mousse mixture evenly among 4 x 300ml glasses, leaving some space for the cherry garnish. Chill for 2 hours to set.",
                "Meanwhile, for the coulis, place raspberries and sugar in a small saucepan over medium heat and cook for 8-10 minutes until raspberries break down slightly. Remove from heat and mash until smooth. Chill until cold.",
                "For the cherry ripe truffles, place cherries and coconut in a food processor and whiz until mixture comes together. Roll 2 tsp portions of mixture into balls and place on a lined tray. Chill for 20 minutes to firm up.",
                "Place cocoa in a shallow bowl and, one at a time, roll truffles in cocoa until completely coated. Remove any excess by giving them a gentle toss between your hands, then chill until required.",
                "To serve, pour raspberry coulis over the mousse, and top each with cherry ripe truffles. "],
        },
        {
            name: "Coconut yoghurt cake",
            image: {
                uri: "https://img.delicious.com.au/T1KdU1cr/del/2020/08/coconut-yoghurt-cake-137201-1.jpg"
            },
            ingredients: [
                "200g unsalted butter, at room temperature, chopped",
                "2 tsp finely grated lime zest, plus extra to serve",
                "3/4 cup (165g) caster sugar",
                "3 eggs, at room temperature",
                "60g fine semolina",
                "1/2 cup (50g) almond meal",
                "1 1/2 cups (225g) self-raising flour, sifted",
                "3/4 cup (45g) shredded coconut",
                "180g natural yoghurt",
                "120ml lime juice",
                "Whipped cream, to serve",
                "370g caster sugar",
                "Finely grated zest of 2 limes plus 1 cup (250ml) lime juice"],
            steps: [" Preheat oven to 180°C. Grease a 25cm round springform pan and line the base and side with baking paper.",
                "Place the butter, lime zest and sugar in the bowl of a stand mixer with the paddle attachment and beat for 5-6 minutes until pale and fluffy. Add eggs, 1 at time, and mix to combine.",
                "Combine the semolina, almond meal, flour and coconut together in a bowl and gently stir into the egg mixture. Add yoghurt and lime juice, stirring until just combined (be sure not to overwork the mixture). Spoon batter into prepared pan and bake for 1 hour or until lightly golden on top and a skewer inserted in the centre comes out clean. Remove from the oven, cover with foil and stand for 10 minutes.",
                "Meanwhile, for the syrup, combine sugar and juice in a saucepan over medium heat, stirring to dissolve sugar. Simmer uncovered for 5 minutes or until slightly reduced, stir in the zest.",
                "Using a skewer, prick holes into the cake then pour half of the hot syrup over the top – it will be absorbed through the holes. Leave to stand for 1 hour before removing from pan and transferring to a wire rack to cool completely.",
                "Top cooled cake with whipped cream and scatter with extra lime zest. Serve with remaining syrup alongside."],
        },
        {
            name: "Bring the Middle Eastern sweets counter to you with these pecan baklava rolls",
            image: {
                uri: "https://img.delicious.com.au/H81hydXI/w759-h506-cfill/del/2020/09/pecan-baklava-roll-138350-1.jpg"
            },
            ingredients: [
                "300g pecans, finely crushed but not powdery, plus 100g extra to garnish",
                "1 1/ 2 tsp ground cinnamon",
                "1/4 freshly grated nutmeg",
                "20 sheets fresh filo pastry",
                "400g ghee, melted, cooled",
                "500g caster sugar",
                "60g glucose syrup",
                "2 cinnamon quills",
                "2 tbs lemon juice"],
            steps: ["Preheat oven to 150°C. For the syrup, place all ingredients and 300ml water in a medium saucepan over medium-high heat. Bring to the boil. Reduce heat to medium-low and cook, stirring, for 3-5 minutes until slightly thickened. Remove from heat and cool.",
                "Place crushed pecan in a bowl with the spices and stir to combine.",
                "As filo pastry dries out quickly, it is best to work with a few sheets at a time and then cover the rest with a lightly damp tea towel until ready to use. Brush a sheet of filo with ghee, then sprinkle about 2 tbs of nut and spice mixture on top. Layer with another sheet of filo, brush with ghee and sprinkle over 2 tbs nut mixture. Repeat this process until you have layered 5 sheets of filo with nut and spice mixture. Roll filo into a long log lengthways. Make sure that the roll is not too loose or too tight. Repeat until you have made 4 logs.",
                "Cut each log into 2.5cm-wide rounds. Arrange pieces close together with cut sides facing up in a large baking tray with high sides. Bake for 1 hour or until golden brown. Pour the cooled syrup over the hot baklava and let it rest. Sprinkle over extra crushed pecans to garnish."],
        },
        {
            name: "Melt-and-mix white chocolate and ginger mud cake",
            image: {
                uri: "https://img.delicious.com.au/s1h9n7gi/del/2020/04/del0420_wicke10-133507-1.jpg"
            },
            ingredients: [
                "450g CADBURY Baking White Chocolate, chopped",
                "300g unsalted butter, chopped, softened",
                "500g sour cream (at room temperature)",
                "1 1/3 cups (200g) self-raising flour, sifted",
                "1 1/3 cups (200g) plain flour, sifted",
                "3 tsp ground ginger, sifted",
                "5 eggs (at room temperature), lightly beaten",
                "300g caster sugar",
                "160g caster sugar",
                "200ml pure (thin) cream",
                "200g CADBURY Baking White Chocolate, chopped",
                "Sea salt flakes, to serve"],
            steps: ["Preheat oven to 160°C. Grease a 23cm round cake pan and line base and sides with 3 layers of baking paper, greasing between layers so they stick together (this stops the side of the cake colouring too much).",
                "Place chocolate and butter in a heatproof bowl over a saucepan of gently simmering water (don’t let the bowl touch the water) and stir until smooth. Cool for 10 minutes (the mixture might split, but will come back together with the other ingredients).",
                "Place remaining ingredients in a large bowl. Add cooled chocolate mixture and, using a large whisk or spatula, mix until smooth. Pour into prepared pan and bake for 1 hour until edges are set (centre will still be wobbly). Loosely cover with foil and bake for a further 1 hour 20 minutes or until a skewer inserted into the centre comes out clean with a few moist crumbs. Stand in pan for 30 minutes, then invert onto a wire rack to cool completely.",
                "For the glaze, place sugar and 2 tbs water in a small saucepan over medium heat. Cook, swirling pan, for 3-4 minutes until a golden caramel forms. Add 2 tbs warm water (caramel will seize, but will come back together when it simmers). Bring to a simmer, then gradually whisk in cream and bring to the boil. Place chocolate in a heatproof bowl and pour in hot caramel. Set aside for 2-3 minutes, then stir until melted and smooth. Cool slightly, then pour glaze over cake, letting it drip over the sides. Sprinkle with salt flakes to serve."],
        },
        {
            name: "Easy lemon meringue pie",
            image: {
                uri: "https://img.delicious.com.au/FWUfB50s/w759-h506-cfill/del/2020/09/easy-peasy-lemon-meringue-pie-139330-2.jpg"
            },
            ingredients: [
                "500g Scottish shortbread biscuits",
                "100g salted butter, softened",
                "1 titanium-strength gelatine leaf",
                "3 egg yolks",
                "395g can condensed milk",
                "100ml lemon juice",
                "Finely grated zest of 1 lemon",
                "1/4 tsp salt",
                "3 eggwhites",
                "100g caster sugar",
                "2 tbs lemon juice",
                "1/2 tsp vanilla extract"],
            steps: ["For the base, place the biscuits in a food processor and blitz to crumbs. Add the butter and blitz again until the mixture looks like wet sand. Press the buttery rubble evenly into a 25cm top x 21cm base (5cm deep) fluted loose-based pie dish. Place in the freezer for 10-15 minutes to harden.",
                "Meanwhile, for the lemon curd, soak the gelatine in cold water for 5 minutes. Remove the gelatine from the bowl, discard water, then return the gelatine to the bowl, cover with 2 tbs boiling water and stir until dissolved.",
                "Place the egg yolks in the bowl of a stand mixer with the whisk attachment and whisk on high speed until pale and thickened. Reduce speed to low and gradually whisk in the condensed milk, lemon juice, zest and salt. Add the gelatine and whisk until combined. Pour the creamy lemon custard into the crust, levelling it out with the back of a spoon, and set in the fridge to chill. It will keep happily for 1-2 days. Lift the pie crust out of its pan; if cold from the fridge, it should come out easily.",
                "For the meringue, place the eggwhites in the cleaned bowl of a stand mixer with the whisk attachment and whisk on high speed until soft peaks form. Gradually add the sugar, spoonful by spoonful, beating all the while. Keep whisking the meringue until it becomes thick and glossy, then add the lemon juice and vanilla extract. Whisk until well combined.",
                "Dollop the meringue onto the pie and spread it out so all the glossy, sunny filling is completely covered. Use a spoon to make small peaks in the meringue, then use a kitchen blowtorch to caramelise it, so the tips are lightly golden and burnished. The pie, in its fully assembled glorious form, will happily sit in the fridge for up to 1 day. Best served chilled. "],
        }]
    return (
        <ScrollView>
            {recipesData.map((recipe, index) => <Recipe
                img={recipe.image}
                name={recipe.name}
                ingredients={recipe.ingredients}
                steps={recipe.steps}
                key={`recipe-${index}`}
            />)}
            <StatusBar style="auto"/>
        </ScrollView>
    );
}

