import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// Source: MDN
const colors = [
{name: "aliceblue", hex: "#f0f8ff", decimal: {Red: 240, Green: 248, Blue: 255}},
{name: "antiquewhite", hex: "#faebd7", decimal: {Red: 250, Green: 235, Blue: 215}},
{name: "aqua", hex: "#00ffff", decimal: {Red: 0, Green: 255, Blue: 255}},
{name: "aquamarine", hex: "#7fffd4", decimal: {Red: 127, Green: 255, Blue: 212}},
{name: "azure", hex: "#f0ffff", decimal: {Red: 240, Green: 255, Blue: 255}},
{name: "beige", hex: "#f5f5dc", decimal: {Red: 245, Green: 245, Blue: 220}},
{name: "bisque", hex: "#ffe4c4", decimal: {Red: 255, Green: 228, Blue: 196}},
{name: "black", hex: "#000000", decimal: {Red: 0, Green: 0, Blue: 0}},
{name: "blanchedalmond", hex: "#ffebcd", decimal: {Red: 255, Green: 235, Blue: 205}},
{name: "blue", hex: "#0000ff", decimal: {Red: 0, Green: 0, Blue: 255}},
{name: "blueviolet", hex: "#8a2be2", decimal: {Red: 138, Green: 43, Blue: 226}},
{name: "brown", hex: "#a52a2a", decimal: {Red: 165, Green: 42, Blue: 42}},
{name: "burlywood", hex: "#deb887", decimal: {Red: 222, Green: 184, Blue: 135}},
{name: "cadetblue", hex: "#5f9ea0", decimal: {Red: 95, Green: 158, Blue: 160}},
{name: "chartreuse", hex: "#7fff00", decimal: {Red: 127, Green: 255, Blue: 0}},
{name: "chocolate", hex: "#d2691e", decimal: {Red: 210, Green: 105, Blue: 30}},
{name: "coral", hex: "#ff7f50", decimal: {Red: 255, Green: 127, Blue: 80}},
{name: "cornflowerblue", hex: "#6495ed", decimal: {Red: 100, Green: 149, Blue: 237}},
{name: "cornsilk", hex: "#fff8dc", decimal: {Red: 255, Green: 248, Blue: 220}},
{name: "crimson", hex: "#dc143c", decimal: {Red: 220, Green: 20, Blue: 60}},
{name: "cyan", hex: "#00ffff", decimal: {Red: 0, Green: 255, Blue: 255}},
{name: "darkblue", hex: "#00008b", decimal: {Red: 0, Green: 0, Blue: 139}},
{name: "darkcyan", hex: "#008b8b", decimal: {Red: 0, Green: 139, Blue: 139}},
{name: "darkgoldenrod", hex: "#b8860b", decimal: {Red: 184, Green: 134, Blue: 11}},
{name: "darkgray", hex: "#a9a9a9", decimal: {Red: 169, Green: 169, Blue: 169}},
{name: "darkgreen", hex: "#006400", decimal: {Red: 0, Green: 100, Blue: 0}},
{name: "darkgrey", hex: "#a9a9a9", decimal: {Red: 169, Green: 169, Blue: 169}},
{name: "darkkhaki", hex: "#bdb76b", decimal: {Red: 189, Green: 183, Blue: 107}},
{name: "darkmagenta", hex: "#8b008b", decimal: {Red: 139, Green: 0, Blue: 139}},
{name: "darkolivegreen", hex: "#556b2f", decimal: {Red: 85, Green: 107, Blue: 47}},
{name: "darkorange", hex: "#ff8c00", decimal: {Red: 255, Green: 140, Blue: 0}},
{name: "darkorchid", hex: "#9932cc", decimal: {Red: 153, Green: 50, Blue: 204}},
{name: "darkred", hex: "#8b0000", decimal: {Red: 139, Green: 0, Blue: 0}},
{name: "darksalmon", hex: "#e9967a", decimal: {Red: 233, Green: 150, Blue: 122}},
{name: "darkseagreen", hex: "#8fbc8f", decimal: {Red: 143, Green: 188, Blue: 143}},
{name: "darkslateblue", hex: "#483d8b", decimal: {Red: 72, Green: 61, Blue: 139}},
{name: "darkslategray", hex: "#2f4f4f", decimal: {Red: 47, Green: 79, Blue: 79}},
{name: "darkslategrey", hex: "#2f4f4f", decimal: {Red: 47, Green: 79, Blue: 79}},
{name: "darkturquoise", hex: "#00ced1", decimal: {Red: 0, Green: 206, Blue: 209}},
{name: "darkviolet", hex: "#9400d3", decimal: {Red: 148, Green: 0, Blue: 211}},
{name: "deeppink", hex: "#ff1493", decimal: {Red: 255, Green: 20, Blue: 147}},
{name: "deepskyblue", hex: "#00bfff", decimal: {Red: 0, Green: 191, Blue: 255}},
{name: "dimgray", hex: "#696969", decimal: {Red: 105, Green: 105, Blue: 105}},
{name: "dimgrey", hex: "#696969", decimal: {Red: 105, Green: 105, Blue: 105}},
{name: "dodgerblue", hex: "#1e90ff", decimal: {Red: 30, Green: 144, Blue: 255}},
{name: "firebrick", hex: "#b22222", decimal: {Red: 178, Green: 34, Blue: 34}},
{name: "floralwhite", hex: "#fffaf0", decimal: {Red: 255, Green: 250, Blue: 240}},
{name: "forestgreen", hex: "#228b22", decimal: {Red: 34, Green: 139, Blue: 34}},
{name: "fuchsia", hex: "#ff00ff", decimal: {Red: 255, Green: 0, Blue: 255}},
{name: "gainsboro", hex: "#dcdcdc", decimal: {Red: 220, Green: 220, Blue: 220}},
{name: "ghostwhite", hex: "#f8f8ff", decimal: {Red: 248, Green: 248, Blue: 255}},
{name: "gold", hex: "#ffd700", decimal: {Red: 255, Green: 215, Blue: 0}},
{name: "goldenrod", hex: "#daa520", decimal: {Red: 218, Green: 165, Blue: 32}},
{name: "gray", hex: "#808080", decimal: {Red: 128, Green: 128, Blue: 128}},
{name: "green", hex: "#008000", decimal: {Red: 0, Green: 128, Blue: 0}},
{name: "greenyellow", hex: "#adff2f", decimal: {Red: 173, Green: 255, Blue: 47}},
{name: "grey", hex: "#808080", decimal: {Red: 128, Green: 128, Blue: 128}},
{name: "honeydew", hex: "#f0fff0", decimal: {Red: 240, Green: 255, Blue: 240}},
{name: "hotpink", hex: "#ff69b4", decimal: {Red: 255, Green: 105, Blue: 180}},
{name: "indianred", hex: "#cd5c5c", decimal: {Red: 205, Green: 92, Blue: 92}},
{name: "indigo", hex: "#4b0082", decimal: {Red: 75, Green: 0, Blue: 130}},
{name: "ivory", hex: "#fffff0", decimal: {Red: 255, Green: 255, Blue: 240}},
{name: "khaki", hex: "#f0e68c", decimal: {Red: 240, Green: 230, Blue: 140}},
{name: "lavender", hex: "#e6e6fa", decimal: {Red: 230, Green: 230, Blue: 250}},
{name: "lavenderblush", hex: "#fff0f5", decimal: {Red: 255, Green: 240, Blue: 245}},
{name: "lawngreen", hex: "#7cfc00", decimal: {Red: 124, Green: 252, Blue: 0}},
{name: "lemonchiffon", hex: "#fffacd", decimal: {Red: 255, Green: 250, Blue: 205}},
{name: "lightblue", hex: "#add8e6", decimal: {Red: 173, Green: 216, Blue: 230}},
{name: "lightcoral", hex: "#f08080", decimal: {Red: 240, Green: 128, Blue: 128}},
{name: "lightcyan", hex: "#e0ffff", decimal: {Red: 224, Green: 255, Blue: 255}},
{name: "lightgoldenrodyellow", hex: "#fafad2", decimal: {Red: 250, Green: 250, Blue: 210}},
{name: "lightgray", hex: "#d3d3d3", decimal: {Red: 211, Green: 211, Blue: 211}},
{name: "lightgreen", hex: "#90ee90", decimal: {Red: 144, Green: 238, Blue: 144}},
{name: "lightgrey", hex: "#d3d3d3", decimal: {Red: 211, Green: 211, Blue: 211}},
{name: "lightpink", hex: "#ffb6c1", decimal: {Red: 255, Green: 182, Blue: 193}},
{name: "lightsalmon", hex: "#ffa07a", decimal: {Red: 255, Green: 160, Blue: 122}},
{name: "lightseagreen", hex: "#20b2aa", decimal: {Red: 32, Green: 178, Blue: 170}},
{name: "lightskyblue", hex: "#87cefa", decimal: {Red: 135, Green: 206, Blue: 250}},
{name: "lightslategray", hex: "#778899", decimal: {Red: 119, Green: 136, Blue: 153}},
{name: "lightslategrey", hex: "#778899", decimal: {Red: 119, Green: 136, Blue: 153}},
{name: "lightsteelblue", hex: "#b0c4de", decimal: {Red: 176, Green: 196, Blue: 222}},
{name: "lightyellow", hex: "#ffffe0", decimal: {Red: 255, Green: 255, Blue: 224}},
{name: "lime", hex: "#00ff00", decimal: {Red: 0, Green: 255, Blue: 0}},
{name: "limegreen", hex: "#32cd32", decimal: {Red: 50, Green: 205, Blue: 50}},
{name: "linen", hex: "#faf0e6", decimal: {Red: 250, Green: 240, Blue: 230}},
{name: "magenta", hex: "#ff00ff", decimal: {Red: 255, Green: 0, Blue: 255}},
{name: "maroon", hex: "#800000", decimal: {Red: 128, Green: 0, Blue: 0}},
{name: "mediumaquamarine", hex: "#66cdaa", decimal: {Red: 102, Green: 205, Blue: 170}},
{name: "mediumblue", hex: "#0000cd", decimal: {Red: 0, Green: 0, Blue: 205}},
{name: "mediumorchid", hex: "#ba55d3", decimal: {Red: 186, Green: 85, Blue: 211}},
{name: "mediumpurple", hex: "#9370db", decimal: {Red: 147, Green: 112, Blue: 219}},
{name: "mediumseagreen", hex: "#3cb371", decimal: {Red: 60, Green: 179, Blue: 113}},
{name: "mediumslateblue", hex: "#7b68ee", decimal: {Red: 123, Green: 104, Blue: 238}},
{name: "mediumspringgreen", hex: "#00fa9a", decimal: {Red: 0, Green: 250, Blue: 154}},
{name: "mediumturquoise", hex: "#48d1cc", decimal: {Red: 72, Green: 209, Blue: 204}},
{name: "mediumvioletred", hex: "#c71585", decimal: {Red: 199, Green: 21, Blue: 133}},
{name: "midnightblue", hex: "#191970", decimal: {Red: 25, Green: 25, Blue: 112}},
{name: "mintcream", hex: "#f5fffa", decimal: {Red: 245, Green: 255, Blue: 250}},
{name: "mistyrose", hex: "#ffe4e1", decimal: {Red: 255, Green: 228, Blue: 225}},
{name: "moccasin", hex: "#ffe4b5", decimal: {Red: 255, Green: 228, Blue: 181}},
{name: "navajowhite", hex: "#ffdead", decimal: {Red: 255, Green: 222, Blue: 173}},
{name: "navy", hex: "#000080", decimal: {Red: 0, Green: 0, Blue: 128}},
{name: "oldlace", hex: "#fdf5e6", decimal: {Red: 253, Green: 245, Blue: 230}},
{name: "olive", hex: "#808000", decimal: {Red: 128, Green: 128, Blue: 0}},
{name: "olivedrab", hex: "#6b8e23", decimal: {Red: 107, Green: 142, Blue: 35}},
{name: "orange", hex: "#ffa500", decimal: {Red: 255, Green: 165, Blue: 0}},
{name: "orangered", hex: "#ff4500", decimal: {Red: 255, Green: 69, Blue: 0}},
{name: "orchid", hex: "#da70d6", decimal: {Red: 218, Green: 112, Blue: 214}},
{name: "palegoldenrod", hex: "#eee8aa", decimal: {Red: 238, Green: 232, Blue: 170}},
{name: "palegreen", hex: "#98fb98", decimal: {Red: 152, Green: 251, Blue: 152}},
{name: "paleturquoise", hex: "#afeeee", decimal: {Red: 175, Green: 238, Blue: 238}},
{name: "palevioletred", hex: "#db7093", decimal: {Red: 219, Green: 112, Blue: 147}},
{name: "papayawhip", hex: "#ffefd5", decimal: {Red: 255, Green: 239, Blue: 213}},
{name: "peachpuff", hex: "#ffdab9", decimal: {Red: 255, Green: 218, Blue: 185}},
{name: "peru", hex: "#cd853f", decimal: {Red: 205, Green: 133, Blue: 63}},
{name: "pink", hex: "#ffc0cb", decimal: {Red: 255, Green: 192, Blue: 203}},
{name: "plum", hex: "#dda0dd", decimal: {Red: 221, Green: 160, Blue: 221}},
{name: "powderblue", hex: "#b0e0e6", decimal: {Red: 176, Green: 224, Blue: 230}},
{name: "purple", hex: "#800080", decimal: {Red: 128, Green: 0, Blue: 128}},
{name: "red", hex: "#ff0000", decimal: {Red: 255, Green: 0, Blue: 0}},
{name: "rosybrown", hex: "#bc8f8f", decimal: {Red: 188, Green: 143, Blue: 143}},
{name: "royalblue", hex: "#4169e1", decimal: {Red: 65, Green: 105, Blue: 225}},
{name: "saddlebrown", hex: "#8b4513", decimal: {Red: 139, Green: 69, Blue: 19}},
{name: "salmon", hex: "#fa8072", decimal: {Red: 250, Green: 128, Blue: 114}},
{name: "sandybrown", hex: "#f4a460", decimal: {Red: 244, Green: 164, Blue: 96}},
{name: "seagreen", hex: "#2e8b57", decimal: {Red: 46, Green: 139, Blue: 87}},
{name: "seashell", hex: "#fff5ee", decimal: {Red: 255, Green: 245, Blue: 238}},
{name: "sienna", hex: "#a0522d", decimal: {Red: 160, Green: 82, Blue: 45}},
{name: "silver", hex: "#c0c0c0", decimal: {Red: 192, Green: 192, Blue: 192}},
{name: "skyblue", hex: "#87ceeb", decimal: {Red: 135, Green: 206, Blue: 235}},
{name: "slateblue", hex: "#6a5acd", decimal: {Red: 106, Green: 90, Blue: 205}},
{name: "slategray", hex: "#708090", decimal: {Red: 112, Green: 128, Blue: 144}},
{name: "slategrey", hex: "#708090", decimal: {Red: 112, Green: 128, Blue: 144}},
{name: "snow", hex: "#fffafa", decimal: {Red: 255, Green: 250, Blue: 250}},
{name: "springgreen", hex: "#00ff7f", decimal: {Red: 0, Green: 255, Blue: 127}},
{name: "steelblue", hex: "#4682b4", decimal: {Red: 70, Green: 130, Blue: 180}},
{name: "tan", hex: "#d2b48c", decimal: {Red: 210, Green: 180, Blue: 140}},
{name: "teal", hex: "#008080", decimal: {Red: 0, Green: 128, Blue: 128}},
{name: "thistle", hex: "#d8bfd8", decimal: {Red: 216, Green: 191, Blue: 216}},
{name: "tomato", hex: "#ff6347", decimal: {Red: 255, Green: 99, Blue: 71}},
{name: "turquoise", hex: "#40e0d0", decimal: {Red: 64, Green: 224, Blue: 208}},
{name: "violet", hex: "#ee82ee", decimal: {Red: 238, Green: 130, Blue: 238}},
{name: "wheat", hex: "#f5deb3", decimal: {Red: 245, Green: 222, Blue: 179}},
{name: "white", hex: "#ffffff", decimal: {Red: 255, Green: 255, Blue: 255}},
{name: "whitesmoke", hex: "#f5f5f5", decimal: {Red: 245, Green: 245, Blue: 245}},
{name: "yellow", hex: "#ffff00", decimal: {Red: 255, Green: 255, Blue: 0}},
{name: "yellowgreen", hex: "#9acd32", decimal: {Red: 154, Green: 205, Blue: 50}}
];

const typeDefs = `
  type RGBValues {
    Red: Int
    Green: Int
    Blue: Int
  }

  type Color {
    name: String
    hex: String
    decimal: RGBValues
  }

  type Query {
    colors: [Color]
    random_color: Color
  }
`;

const resolvers = {
    Query: {
        colors: () => colors,
        random_color: () => {
          const randomIndex = Math.floor(Math.random() * colors.length);
          return colors[randomIndex]
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);