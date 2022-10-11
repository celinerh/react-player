import CategoryCard from "../../components/CategoryCard";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import useCategories from "../../hooks/useCategories";

function Categories() {
  const { categories } = useCategories();

  return (
    <>
      <Header showSearch />

      <div className="page-wrapper">
        <Heading title="Categories" />
        <div className="grid grid-cols-2 gap-6">
          {categories &&
            categories.categories.items.map((category: any) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.name}
                imageSource={category.icons[0].url}
                artists={[category.name]}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
