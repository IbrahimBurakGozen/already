using Core.ProductAggregate;
namespace Infrastructure.Data.Seed.ProductAggregate;

public static class CategorySeedData
{
    public static readonly Category[] Data = new Category []{

        new Category(null, "Zuivel", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fzuivel.jpg?alt=media&token=7c67c1dd-c2f7-425b-b638-cc7208997902","Zuivel")),

        new Category(null, new List<Category>()
        {
            new Category(null, "Frisdranken"),
            new Category(null, "Bier"),
            new Category(null, "Wijn"),
            new Category(null, "Waters"),
        },"Dranken", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fdranken.jpg?alt=media&token=a7a1771a-c770-48bf-8d0c-2b06c5272c4d","Dranken")),
        
        new Category(null, "Noten en Zaden", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fnoten.jpg?alt=media&token=8754eba6-5105-48e4-bea4-98d836979ae1","Noten en Zaden")),
        
        new Category(null, "Kant-en-klaar", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fkant-en-klaar.jpg?alt=media&token=f688bf3d-8421-4a02-b502-1d574942f2f6","Kant-en-klaar")),
        
        new Category(null, "Schoonmaak & hygiëne", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fhygiene.jpg?alt=media&token=15dbc86d-4070-4dba-98f7-043743340463","Schoonmaak & hygiëne")),

        new Category(null, "Ontbijtgranen & beleg", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fontbijtgranen.jpeg?alt=media&token=89b6fc3c-5607-4df8-9a95-f857b3d3247c","Ontbijtgranen & beleg")),

        new Category(null, "Huidieren", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fhuisdieren.jpg?alt=media&token=5b192ae8-37ee-41cd-a32b-4a1740c34996","Huidieren")),

        new Category(null, "Baby", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fbaby.jpg?alt=media&token=dffa5c2c-71ae-4feb-8d9c-9f621753e414","Baby")),
        
        new Category(null, "Snacks", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fsnacks.jpg?alt=media&token=eb2d8ae8-b4a7-4670-a72d-efd86e3b350b","Snacks")),

        new Category(null, "Vis en Vlees", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fvlees.jpg?alt=media&token=758588b9-b175-457d-ab29-a771640a4b49","Vis en Vlees")),
        
        new Category(null, "Soepen, sauzen, olie", new Image("https://firebasestorage.googleapis.com/v0/b/already-357821.appspot.com/o/categories%2Fsoepen.jpg?alt=media&token=8d82dba7-7c19-45d7-a3b2-9e2bc6574005","Soepen, sauzen, olie")),
    };
    
}
