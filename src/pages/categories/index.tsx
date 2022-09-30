import AlbumCard from "../../components/AlbumCard";
import Heading from "../../components/Heading";
import useCategories from "../../hooks/useCategories";

function Categories() {
  const { categories } = useCategories();
  console.log(categories);

  return (
    <div>
      <Heading title="Categories" />
      <div className="grid grid-cols-2 gap-6">
        {categories &&
          categories.categories.items.map((category: any) => (
            <AlbumCard
              key={category.id}
              type="category"
              href={category.href}
              id={category.id}
              title={category.name}
              imageSource={category.icons[0].url}
              artists={[category.name]}
            />
          ))}
      </div>
    </div>
  );
}

export default Categories;
