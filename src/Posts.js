import React from "react"
import Jan03 from "./images/010322.png"
import Jan04 from "./images/010422.png"
import Jan05 from "./images/010522.png"
import Jan06 from "./images/010622.png"
import Jan07 from "./images/010722.png"
import Jan08 from "./images/010822.png"

export default function Posts() {
    return (
        <posts>
            <div class="day">
                <h3>Monday, January 3</h3>
                <p>Drove from Dasmarinas to Subic Bay. The drive was really scenic, the highway roads were new, and there weren't many cars on the road. When we go to the condotel, we realized our front left tire was flat. We unpacked the car, unpacked our things in the condotel, replaced the flat tire with a spare, went grocery shopping, did laundry, and cooked dinner. We made an build your own korean kimbap handrolls board - it was delicious!</p>
                <img src={Jan03} alt="view from Chequere Suites balcony" className="image" />
            </div>
            <div class="day">
                <h3>Tuesday, Jaunary 4</h3>
                <p>Went to New Subic Public Market to get groceries. The market was big, clean, and not too crowded. Was a pleasant market experience. Got lunch at 2 and 2 on the way back to Chequere Suites. Had bulalo and mang shakes on the beach. Before dinner, we took a walk to the beach and explored the duty free supermarket. Had leftover bulalo for dinner and paired it with a crab meat salad.</p>
                <img src={Jan04} alt="subic market vegetable stand" className="image" />
            </div>
            <div class="day">
                <h3>Wednesday, January 5</h3>
                <p>Started off the morning with a walk to the beach while listening to Cover Story podcast. Did pilates on the balcony. Spent the day catching up with work and learning react. Went to the duty free supermarket across the street to load up on snacks. Jesse made kimich jigae for dinner.</p>
                <img src={Jan05} alt="snack haul from duty free supermarket" className="image" />
            </div>
            <div class="day">
                <h3>Thursday, January 6</h3>
                <p>Went to Pamulaklakin Trail this morning and had a mini jungle tour with Anthony. Learned about trees/plants that help with kidney stones and UTIS, (goo goo) soap/shampoo, water source, and a healing ointment. Had a nice breakfast in the river with oatmeal and bananas brought from the condotel. Walked to the mall to find pastries and stumbled upon Red Ribbon and picked out ensymada. Went to the grocery store at the mall to get ingredients for dinner - penne, tomato sauce, meatless meatballs, and broccoli.</p>
                <img src={Jan06} alt="oatmeal breakfast in the river on Pamulaklakin Trail" className="image" />
            </div>
            <div class="day">
                <h3>Friday, January 7</h3>
                <p>Walked to SM to find shoes for Jesse's school. Didn't find shoes but ended up grocery shopping in SM. Did a pilates class on the balcony. Had dinner at Chef Samurai. Got a little sushi happy and ordered way too much food. Ended the night eating ice cream and watching tv.</p>
                <img src={Jan07} alt="sushi dinner at chef samurai" className="image" />
            </div>
            <div class="day">
                <h3>Saturday, January 8</h3>
                <p>Slept in. Attempted to cook breakfast but burned the longganisa :/ Got a facial at Ayala Malls across the street. Had dinner in the hotel - I got tocino and Jesse got beef tapa.</p>
                <img src={Jan08} alt="burnt the breakfast longganisa" className="image" />
            </div>
        </posts>
    )
}