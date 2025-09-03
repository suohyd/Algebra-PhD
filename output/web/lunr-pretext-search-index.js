var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-algebra",
  "level": "1",
  "url": "sec-algebra.html",
  "type": "Section",
  "number": "1.1",
  "title": "Algebra over a commutative ring",
  "body": " Algebra over a commutative ring  We begin with a definition of algebra over a commutative ring.   Associative algebra   Let be a commutative ring with unity . An -algebra or algebra over is a unital right -module together with -bilinear map denoted by that is associative, i.e., for all , and there is a unity such that for all .      The bilinearlity of the map in implies the following relation for any and any .     We have the following equivalent definition of -algebra.    Following statements are equivalent.    is an -algebra     is a ring and a right -module such that for any and , we have .        Assume that is an -algebra. Then is a ring with the multiplication given by the -bilinear map . Indeed, the associativity of the multiplication follows from the definition. The distributivity of the multiplication over addition follows from the bilinearity of the map. The existence of unity is also given in the definition. The relation follows from .  Conversely, assume that is a ring and a right -module such that for any and , we have . We consider a map as the multiplication in ring . Therefore, (resp., ) for any and also there is a unity in ring . The -linearity of the map follows from the relation , i.e., .        If is an algebra then, there is a ring homomorphism such that is contained in the center of .    Suppose that is a ring and there is a ring homomorphism such that is contained in the center of . Then, is an -algebra with the right -module structure given by for any and .        If is an -algebra then, we define a map by for any . It is easy to see that is a ring homomorphism and is contained in the center of . Conversely, suppose that is a ring and there is a ring homomorphism such that is contained in the center of . We consider the right -module structure on given by for any and . Then, it is easy to see that the relation in (2) holds. Therefore, by , we conclude that is an -algebra.   "
},
{
  "id": "def-algebra",
  "level": "2",
  "url": "sec-algebra.html#def-algebra",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Associative algebra.",
  "body": " Associative algebra   Let be a commutative ring with unity . An -algebra or algebra over is a unital right -module together with -bilinear map denoted by that is associative, i.e., for all , and there is a unity such that for all .   "
},
{
  "id": "obs-algebra",
  "level": "2",
  "url": "sec-algebra.html#obs-algebra",
  "type": "Observation",
  "number": "1.1.2",
  "title": "",
  "body": "  The bilinearlity of the map in implies the following relation for any and any .    "
},
{
  "id": "prop-algebra-equiv-def",
  "level": "2",
  "url": "sec-algebra.html#prop-algebra-equiv-def",
  "type": "Proposition",
  "number": "1.1.3",
  "title": "",
  "body": "  Following statements are equivalent.    is an -algebra     is a ring and a right -module such that for any and , we have .      "
},
{
  "id": "sec-algebra-7",
  "level": "2",
  "url": "sec-algebra.html#sec-algebra-7",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Assume that is an -algebra. Then is a ring with the multiplication given by the -bilinear map . Indeed, the associativity of the multiplication follows from the definition. The distributivity of the multiplication over addition follows from the bilinearity of the map. The existence of unity is also given in the definition. The relation follows from .  Conversely, assume that is a ring and a right -module such that for any and , we have . We consider a map as the multiplication in ring . Therefore, (resp., ) for any and also there is a unity in ring . The -linearity of the map follows from the relation , i.e., .  "
},
{
  "id": "lem-algebra-in-center",
  "level": "2",
  "url": "sec-algebra.html#lem-algebra-in-center",
  "type": "Lemma",
  "number": "1.1.4",
  "title": "",
  "body": "     If is an algebra then, there is a ring homomorphism such that is contained in the center of .    Suppose that is a ring and there is a ring homomorphism such that is contained in the center of . Then, is an -algebra with the right -module structure given by for any and .      "
},
{
  "id": "sec-algebra-9",
  "level": "2",
  "url": "sec-algebra.html#sec-algebra-9",
  "type": "Proof",
  "number": "1.1.2",
  "title": "",
  "body": " If is an -algebra then, we define a map by for any . It is easy to see that is a ring homomorphism and is contained in the center of . Conversely, suppose that is a ring and there is a ring homomorphism such that is contained in the center of . We consider the right -module structure on given by for any and . Then, it is easy to see that the relation in (2) holds. Therefore, by , we conclude that is an -algebra.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
