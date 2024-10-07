# ![image info](../images/icons8-inspect-code-64.png) Selma Tutorial

## ![image info](../../images/icons8-code-64.png) _Description_

The main idea is to prohibit magic conversion and just automate all mappings without any side effects. When mapping appears to be too complex, the developer should handle it by himself using custom mappings/interceptors. The footprint of Selma should be as small as possible as we only depend on a JavaWriter and the JDK. Selma tries to only use static compiled generated code without any reflection at runtime or pseudo-code written in string fields. You can use composition to build a chain of mappers and inside a single mapper you can have global configuration that can be overwritten on a per method basis. Annotation-based approach \(APT\) is used to generate end-to-end object mappings.

## ![image info](../../images/icons8-attach-64.png) _Features_

## ![image info](../../images/icons8-edit-property-64.png )_Pros & Cons_

### ![image info](../../images/icons8-add-property-64.png) _Pros_

* object mappings generated at compile time
* user-friendly approach backed by annotations simplifies the notation of object property mappings
* mappers compositions with configurations provide possibility to reuse already defined object matchings \(new method does not have to be provided for each mapping\)

### ![image info](../../images/icons8-remove-property-64.png) _Cons

## ![image info](../../images/icons8-source-64.png) _Use cases_

## ![image info](../../images/icons8-inspect-code-64.png) _Links_

* [**Official Site**](http://www.selma-java.org/)
* [**Official Repository**](https://github.com/xebia-france/selma)
* [**Java Selma Alternatives**](https://java.libhunt.com/selma-alternatives)
