class CreateCinemas < ActiveRecord::Migration[5.0]
  def change
    create_table :cinemas do |t|
      t.string :title
      t.string :year
      t.string :genre
      t.string :director
      t.string :actors
      t.string :country
      t.string :awards
      t.string :poster
      t.string :imdbScore

      t.timestamps
    end
  end
end
