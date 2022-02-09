import Artista from "./Artista";
import Remedio from "./Remedio";

let alceu: Artista;
let sheldon: Artista;
let manuca: Artista;

alceu = new Artista('Alceu Valença', 1960, 'Rock', true);
sheldon = new Artista('Sheldon Férrer', 2011, 'Brega Funk', true);
manuca = new Artista('Manuca', 2010, 'Musica Pernambucana', false);

alceu.mostraArtista();
manuca.bombaArtista();

let diazepam: Remedio;
let dipirona: Remedio;
let ibuprofeno: Remedio;

diazepam = new Remedio('Diazepam', 'Ansiolítico', 'comprimido(s)', 10, true);
dipirona = new Remedio('Dipirona', 'Antitérmico', 'ml', 10, false);
ibuprofeno = new Remedio('Ibuprofeno', 'Anti-inflamatório', 'comprimido(s)', 30, false);

diazepam.escreveRemedio();
dipirona.setTarjaPreta();
dipirona.escreveRemedio();

