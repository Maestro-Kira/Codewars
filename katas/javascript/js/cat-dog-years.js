
/*

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html


 */



function humanYearsCatYearsDogYears(humanYears) {
    
        let dogYears = 15;
        let catYears = 15;
        
        switch (humanYears) {
            case 1:
            return [humanYears, dogYears, catYears ]

            case 2:
            return [humanYears, dogYears + 9, catYears + 9 ]

            default:
            return [
                 humanYears,
                 (catYears + 9) + ((humanYears-2) * 4),
                 (dogYears + 9) + ((humanYears-2) * 5)
                ]
        }
}

console.log(humanYearsCatYearsDogYears(10));

