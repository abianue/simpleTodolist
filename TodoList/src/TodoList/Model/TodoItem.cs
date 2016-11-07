using System;
using System.ComponentModel.DataAnnotations;

namespace ShiledEnergyTodoList.Model
{
    public class TodoItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public Boolean IsCompleted { get; set; }
    }
}
