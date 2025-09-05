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
  "id": "sec-examples-algebras",
  "level": "1",
  "url": "sec-examples-algebras.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some examples of algebras",
  "body": " Some examples of algebras   Associative ring as -algbera   Every associative ring can be considered as a -algebra.     Ring as an algebra over itself   Let be a commutative ring with unity. Then can be considered a right -module using the multiplication in ring . With this considerations, is an -algebra.     Ring over its center   Suppose that is a ring (not necessarily commutative), and let be the center of . Then is a -algebra.     Matrix algebra   Suppose that is a commutative ring and is a positive integer. Suppose that is an -algebra. Then the ring of matrices over , denoted by , is an -algebra.     Endomorphism algebra   Let be a commutative ring with unity. Suppose that is a right -module. The endomorphism ring is an -algebra.     Polynomial ring as algebra   Let be a commutative ring with unity. The polynomial ring is an -algebra.    We discuss the example of Group algebra in the next section.  "
},
{
  "id": "sec-examples-algebras-2",
  "level": "2",
  "url": "sec-examples-algebras.html#sec-examples-algebras-2",
  "type": "Example",
  "number": "1.2.1",
  "title": "Associative ring as <span class=\"process-math\">\\(\\Z\\)<\/span>-algbera.",
  "body": " Associative ring as -algbera   Every associative ring can be considered as a -algebra.   "
},
{
  "id": "ex-ring-over-itself",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-ring-over-itself",
  "type": "Example",
  "number": "1.2.2",
  "title": "Ring as an algebra over itself.",
  "body": " Ring as an algebra over itself   Let be a commutative ring with unity. Then can be considered a right -module using the multiplication in ring . With this considerations, is an -algebra.   "
},
{
  "id": "ex-algebra-over-center",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-algebra-over-center",
  "type": "Example",
  "number": "1.2.3",
  "title": "Ring over its center.",
  "body": " Ring over its center   Suppose that is a ring (not necessarily commutative), and let be the center of . Then is a -algebra.   "
},
{
  "id": "ex-matrix-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-matrix-algebra",
  "type": "Example",
  "number": "1.2.4",
  "title": "Matrix algebra.",
  "body": " Matrix algebra   Suppose that is a commutative ring and is a positive integer. Suppose that is an -algebra. Then the ring of matrices over , denoted by , is an -algebra.   "
},
{
  "id": "ex-endomorphism-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-endomorphism-algebra",
  "type": "Example",
  "number": "1.2.5",
  "title": "Endomorphism algebra.",
  "body": " Endomorphism algebra   Let be a commutative ring with unity. Suppose that is a right -module. The endomorphism ring is an -algebra.   "
},
{
  "id": "ex-polynomial-algebra",
  "level": "2",
  "url": "sec-examples-algebras.html#ex-polynomial-algebra",
  "type": "Example",
  "number": "1.2.6",
  "title": "Polynomial ring as algebra.",
  "body": " Polynomial ring as algebra   Let be a commutative ring with unity. The polynomial ring is an -algebra.   "
},
{
  "id": "sec-group-algebra",
  "level": "1",
  "url": "sec-group-algebra.html",
  "type": "Section",
  "number": "1.3",
  "title": "Group algebra",
  "body": " Group algebra   Group Ring   Let be a commutative ring with unity and a group. Consider the following set. Define addition and scalar multiplication in as follows. The multiplication in is defined as convolution product.       Show that is closed under addition, scalar multiplication, and it is an -module. Furthermore, show that multiplication is bilinear.    We now proceed to check the associativity of multiplication and the existence of unity in . We first observe that is a free -module.    Keep notations of above. Let for , be the characteristic function of , i.e., if and . Then, set is an -basis of . In particular, is a free -module.  Furthermore, given by is a monoid homomorphism. In particular, and if is the identity then, is the unity in .     Suppose that for some and . Evaluating at , we get . Thus, the set is linearly independent. Now, let . Then, we can write where the sum is over all such that . This shows that the set spans . Thus, it is an -basis of .  Direct calculation shows that for all .  We show the associativity of multiplication. Let . Then, there exists such that , , . Therefore, we obtain the following. This shows the associativity of multiplication.  For any we get the following. The above equation is nonzero only when and . This implies that . Thus, we get . Similarly, we can show that . This shows that is the unity in .    Group algebra of the cyclic group of order 2   Suppose that denotes the cyclic group of order two. The general element of is of the form for some . Observe that , and that is commutative. Consider the map given as follows. Check that the above map is a surjective homomorphism of rings. We compute its kernel. We have . We claim that the kernel is generated by . Let . Then, . As is a basis we have that and . Note that , and that . Hence, and divides . As and are coprime, we get that divides . This shows that . By the first isomorphism theorem, induces isomorphism of rings .      Let be a group of order two. Show that via the map .      Let be a finite group. Show that in a group ring following holds.    satisfies      and               Suppose that is a group and that is a commutative ring. Then, is an -algebra, and it is a free -module with basis .  Let be an -algebra, and let be a homomorphism to the multiplicative monoid of . Then, extends uniquely to an -algebra homomorphism of -algebras.  In other words, the following diagram commutes.  Universal property of group algebra          In view of , it suffices to show the universal property. Let be an -algebra and let be a homomorphism to the multiplicative monoid of . Define as follows. We leave it to the reader to check that is a well-defined homomorphism of -algebras and that it is the unique extension of .    Augmentation Ideal   Let be a commutative ring with unity and a nontrivial group. The augmentation map is the -algebra homomorphism given by . The kernel of the augmentation map is called the augmentation ideal of , and it is denoted by .     Augmentation map is an -algebra homomorphism   Show that the augmentation map is a well-defined surjective -algebra homomorphism.     Generators of augmentation ideal   Let be a commutative ring with unity and a nontrivial group. Show that the augmentation ideal is generated as an -module by the set , where is the identity of .    "
},
{
  "id": "def-group-algebra",
  "level": "2",
  "url": "sec-group-algebra.html#def-group-algebra",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Group Ring.",
  "body": " Group Ring   Let be a commutative ring with unity and a group. Consider the following set. Define addition and scalar multiplication in as follows. The multiplication in is defined as convolution product.    "
},
{
  "id": "sec-group-algebra-3",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-3",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": "  Show that is closed under addition, scalar multiplication, and it is an -module. Furthermore, show that multiplication is bilinear.   "
},
{
  "id": "prop-group-algebra-free-module",
  "level": "2",
  "url": "sec-group-algebra.html#prop-group-algebra-free-module",
  "type": "Proposition",
  "number": "1.3.3",
  "title": "",
  "body": "  Keep notations of above. Let for , be the characteristic function of , i.e., if and . Then, set is an -basis of . In particular, is a free -module.  Furthermore, given by is a monoid homomorphism. In particular, and if is the identity then, is the unity in .   "
},
{
  "id": "sec-group-algebra-6",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-6",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " Suppose that for some and . Evaluating at , we get . Thus, the set is linearly independent. Now, let . Then, we can write where the sum is over all such that . This shows that the set spans . Thus, it is an -basis of .  Direct calculation shows that for all .  We show the associativity of multiplication. Let . Then, there exists such that , , . Therefore, we obtain the following. This shows the associativity of multiplication.  For any we get the following. The above equation is nonzero only when and . This implies that . Thus, we get . Similarly, we can show that . This shows that is the unity in .  "
},
{
  "id": "eg-group-algebra-cyclic-2",
  "level": "2",
  "url": "sec-group-algebra.html#eg-group-algebra-cyclic-2",
  "type": "Example",
  "number": "1.3.4",
  "title": "Group algebra of the cyclic group of order 2.",
  "body": " Group algebra of the cyclic group of order 2   Suppose that denotes the cyclic group of order two. The general element of is of the form for some . Observe that , and that is commutative. Consider the map given as follows. Check that the above map is a surjective homomorphism of rings. We compute its kernel. We have . We claim that the kernel is generated by . Let . Then, . As is a basis we have that and . Note that , and that . Hence, and divides . As and are coprime, we get that divides . This shows that . By the first isomorphism theorem, induces isomorphism of rings .   "
},
{
  "id": "sec-group-algebra-8",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-8",
  "type": "Checkpoint",
  "number": "1.3.5",
  "title": "",
  "body": "  Let be a group of order two. Show that via the map .   "
},
{
  "id": "sec-group-algebra-9",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-9",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": "  Let be a finite group. Show that in a group ring following holds.    satisfies      and            "
},
{
  "id": "thm-universal-property-group-algebra",
  "level": "2",
  "url": "sec-group-algebra.html#thm-universal-property-group-algebra",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "",
  "body": "  Suppose that is a group and that is a commutative ring. Then, is an -algebra, and it is a free -module with basis .  Let be an -algebra, and let be a homomorphism to the multiplicative monoid of . Then, extends uniquely to an -algebra homomorphism of -algebras.  In other words, the following diagram commutes.  Universal property of group algebra        "
},
{
  "id": "sec-group-algebra-11",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-11",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": " In view of , it suffices to show the universal property. Let be an -algebra and let be a homomorphism to the multiplicative monoid of . Define as follows. We leave it to the reader to check that is a well-defined homomorphism of -algebras and that it is the unique extension of .  "
},
{
  "id": "def-augmentation-ideal",
  "level": "2",
  "url": "sec-group-algebra.html#def-augmentation-ideal",
  "type": "Definition",
  "number": "1.3.9",
  "title": "Augmentation Ideal.",
  "body": " Augmentation Ideal   Let be a commutative ring with unity and a nontrivial group. The augmentation map is the -algebra homomorphism given by . The kernel of the augmentation map is called the augmentation ideal of , and it is denoted by .   "
},
{
  "id": "sec-group-algebra-13",
  "level": "2",
  "url": "sec-group-algebra.html#sec-group-algebra-13",
  "type": "Checkpoint",
  "number": "1.3.10",
  "title": "Augmentation map is an <span class=\"process-math\">\\(R\\)<\/span>-algebra homomorphism.",
  "body": " Augmentation map is an -algebra homomorphism   Show that the augmentation map is a well-defined surjective -algebra homomorphism.   "
},
{
  "id": "exe-augmentation-ideal-generators",
  "level": "2",
  "url": "sec-group-algebra.html#exe-augmentation-ideal-generators",
  "type": "Checkpoint",
  "number": "1.3.11",
  "title": "Generators of augmentation ideal.",
  "body": " Generators of augmentation ideal   Let be a commutative ring with unity and a nontrivial group. Show that the augmentation ideal is generated as an -module by the set , where is the identity of .   "
},
{
  "id": "sec-morphisms-of-algebras",
  "level": "1",
  "url": "sec-morphisms-of-algebras.html",
  "type": "Section",
  "number": "1.4",
  "title": "Morphisms of algebras",
  "body": " Morphisms of algebras   Homomorphism -algebras   Let be a commutative ring with unity. Let and be -algebras. An R-algebra homomorphism (or simply, a morphism of -algebras ) is a map which is both a ring homomorphism and an -module homomorphism.  An -algebra homomorphism from to itself is called an endormorphism of -algebras . The set of all endomorphisms of -algebras is denoted by .     Regular representation   Let be a field, and let be an -algebra. For we define an -linear map by for all . The following map is called the regular representation of . We leave it to the reader to verify that the regular representation is a homomorphism of -algebras.  Note that as is unital is nonzero for all nonzero . Thus, the regular representation is injective.     Quotient algebra   Let be a commutative ring with unity. Let be an -algebra. Show that the quotient is an -algebra for any ideal of . Furthermore, show that the natural projection is an -algebra homomorphism.  If is homomorphism of -algebras, then show that is an ideal of and that the image of is an -subalgebra of . Furthermore, show that as -algebras.     Factorization criterion   Let be a commutative ring with unity. Let and be homomorphisms of -algebras with surjective. Show that factors through (i.e., there exists a homomorphism of -algebras such that if and only if .   Factorization criterion   Factorization criterion diagram     In other words, there exists a dotted arrow ( -algebra homomorphism ) making the above diagram commutative if and only if .     Isomorphism of -algebras   Let be a commutative ring with unity. Let and be -algebras. An -algebra homomorphism is an isomorphism of -algebras if there exists an -algebra homomorphism such that and . In this case, we say that and are isomorphic as -algebras and we write .  An -algebra isomorphism from to itself is called an automorphism of -algebras . The set of all automorphisms of -algebras is denoted by .     Subalgebra   Let be a commutative ring with unity. Let be an -algebra. An -algebra is called an -subalgebra of if and the inclusion map is an -algebra homomorphism.    "
},
{
  "id": "def-morphism-of-algebras",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-morphism-of-algebras",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Homomorphism <span class=\"process-math\">\\(R\\)<\/span>-algebras.",
  "body": " Homomorphism -algebras   Let be a commutative ring with unity. Let and be -algebras. An R-algebra homomorphism (or simply, a morphism of -algebras ) is a map which is both a ring homomorphism and an -module homomorphism.  An -algebra homomorphism from to itself is called an endormorphism of -algebras . The set of all endomorphisms of -algebras is denoted by .   "
},
{
  "id": "ex-regular-representation",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#ex-regular-representation",
  "type": "Example",
  "number": "1.4.2",
  "title": "Regular representation.",
  "body": " Regular representation   Let be a field, and let be an -algebra. For we define an -linear map by for all . The following map is called the regular representation of . We leave it to the reader to verify that the regular representation is a homomorphism of -algebras.  Note that as is unital is nonzero for all nonzero . Thus, the regular representation is injective.   "
},
{
  "id": "exe-quotient-algebra",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#exe-quotient-algebra",
  "type": "Checkpoint",
  "number": "1.4.3",
  "title": "Quotient algebra.",
  "body": " Quotient algebra   Let be a commutative ring with unity. Let be an -algebra. Show that the quotient is an -algebra for any ideal of . Furthermore, show that the natural projection is an -algebra homomorphism.  If is homomorphism of -algebras, then show that is an ideal of and that the image of is an -subalgebra of . Furthermore, show that as -algebras.   "
},
{
  "id": "exe-factorization-criterion",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#exe-factorization-criterion",
  "type": "Checkpoint",
  "number": "1.4.4",
  "title": "Factorization criterion.",
  "body": " Factorization criterion   Let be a commutative ring with unity. Let and be homomorphisms of -algebras with surjective. Show that factors through (i.e., there exists a homomorphism of -algebras such that if and only if .   Factorization criterion   Factorization criterion diagram     In other words, there exists a dotted arrow ( -algebra homomorphism ) making the above diagram commutative if and only if .   "
},
{
  "id": "def-isomorphism-of-algebras",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-isomorphism-of-algebras",
  "type": "Definition",
  "number": "1.4.6",
  "title": "Isomorphism of <span class=\"process-math\">\\(R\\)<\/span>-algebras.",
  "body": " Isomorphism of -algebras   Let be a commutative ring with unity. Let and be -algebras. An -algebra homomorphism is an isomorphism of -algebras if there exists an -algebra homomorphism such that and . In this case, we say that and are isomorphic as -algebras and we write .  An -algebra isomorphism from to itself is called an automorphism of -algebras . The set of all automorphisms of -algebras is denoted by .   "
},
{
  "id": "def-subalgebra",
  "level": "2",
  "url": "sec-morphisms-of-algebras.html#def-subalgebra",
  "type": "Definition",
  "number": "1.4.7",
  "title": "Subalgebra.",
  "body": " Subalgebra   Let be a commutative ring with unity. Let be an -algebra. An -algebra is called an -subalgebra of if and the inclusion map is an -algebra homomorphism.   "
},
{
  "id": "sec-bimodule",
  "level": "1",
  "url": "sec-bimodule.html",
  "type": "Section",
  "number": "1.5",
  "title": "Bimodules",
  "body": " Bimodules  Suppose that is a right -algebra, and that is a right -module. Then, is also a right -module. Similarly, if is a left -algebra, and is a left -module, then is also a left -module.   (A,B) bimodule   Let be a commutative ring with unity. Let and be right -algebras. An -bimodule is an abelian group which is both a left -module and a right -module such that for all , , and we have the following compatibility conditions.      We sometimes denote the -bimodule by . Furthermore, if , then we say that is an -bimodule .     Let be a commutative ring with unity, and let be a right -algebra. Let be a left -module. Then, is -bimodule.    "
},
{
  "id": "def-bimodule",
  "level": "2",
  "url": "sec-bimodule.html#def-bimodule",
  "type": "Definition",
  "number": "1.5.1",
  "title": "(A,B) bimodule.",
  "body": " (A,B) bimodule   Let be a commutative ring with unity. Let and be right -algebras. An -bimodule is an abelian group which is both a left -module and a right -module such that for all , , and we have the following compatibility conditions.    "
},
{
  "id": "sec-bimodule-4",
  "level": "2",
  "url": "sec-bimodule.html#sec-bimodule-4",
  "type": "Note",
  "number": "1.5.2",
  "title": "",
  "body": " We sometimes denote the -bimodule by . Furthermore, if , then we say that is an -bimodule .  "
},
{
  "id": "sec-bimodule-5",
  "level": "2",
  "url": "sec-bimodule.html#sec-bimodule-5",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Let be a commutative ring with unity, and let be a right -algebra. Let be a left -module. Then, is -bimodule.   "
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
